# Tutorial: Como Desenvolver um Sistema de Login Completo (Node.js + HTML/CSS/JS)

Este tutorial vai guiá-lo na criação de um **sistema de login com duas etapas** (verificação de e-mail e depois senha), usando **backend e frontend separados**, baseado em um exemplo real de aplicação.

---

## 📋 Visão Geral do Que Será Construído

```
┌─────────────┐         ┌──────────────┐         ┌──────────┐
│  Frontend   │ ──────► │   Backend    │ ──────► │  Banco   │
│ (HTML/CSS/  │ ◄────── │ (Express +   │ ◄────── │  (SQL)   │
│    JS)      │         │  Rotas)      │         │          │
└─────────────┘         └──────────────┘         └──────────┘
```

**Fluxo do usuário:**

1. Digita o **e-mail** → clica em "Avançar"
2. Backend **verifica se o e-mail existe** → retorna o nome
3. Frontend mostra **"Olá, [Nome]!"** e pede a senha
4. Usuário digita a **senha** → clica em "Entrar"
5. Backend **valida a senha** e cria um **cookie de sessão**
6. Usuário é **redirecionado** para o menu do sistema

---

## 🗂️ Estrutura de Pastas Recomendada

```
meu-projeto/
│
├── backend/
│   ├── controllers/
│   │   └── loginController.js
│   ├── middlewares/
│   │   └── authMiddleware.js
│   ├── routes/
│   │   └── loginRoutes.js
│   ├── database.js
│   └── server.js
│
└── frontend/
    └── login/
        ├── login.html
        ├── login.css
        └── login.js
```

---

## Passo 1: Banco de Dados

Crie a tabela **`pessoa`** com os campos necessários:

```sql
CREATE TABLE pessoa (
    id_pessoa SERIAL PRIMARY KEY,
    nome_pessoa VARCHAR(100) NOT NULL,
    email_pessoa VARCHAR(150) UNIQUE NOT NULL,
    senha_pessoa VARCHAR(255) NOT NULL,
    primeiro_acesso_pessoa BOOLEAN DEFAULT TRUE,
    data_nascimento_pessoa DATE
);
```

> ⚠️ **Importante:** A senha **NUNCA** deve ser salva em texto puro. Use **bcrypt** para gerar o hash.

---

## Passo 2: Backend — Configuração do Banco

**`backend/database.js`**

```javascript
const { Pool } = require('pg');

const pool = new Pool({
    user: 'seu_usuario',
    host: 'localhost',
    database: 'seu_banco',
    password: 'sua_senha',
    port: 5432,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
```

---

## Passo 3: Backend — Controller de Login

**`backend/controllers/loginController.js`**

```javascript
const bcrypt = require('bcrypt');
const db = require('../database.js');

// 🔹 Verifica se o e-mail existe e retorna o nome
exports.verificarEmail = async (req, res) => {
    const { email } = req.body;
    const sql = 'SELECT nome_pessoa FROM pessoa WHERE email_pessoa = $1';

    try {
        const result = await db.query(sql, [email]);

        if (result.rows.length > 0) {
            return res.json({ 
                status: 'existe', 
                nome: result.rows[0].nome_pessoa 
            });
        }

        res.json({ status: 'nao_encontrado' });
    } catch (err) {
        console.error('Erro em verificarEmail:', err);
        res.status(500).json({ status: 'erro', mensagem: err.message });
    }
};

// 🔹 Valida a senha e cria o cookie de sessão
exports.verificarSenha = async (req, res) => {
    const { email, senha } = req.body;

    const sqlPessoa = `
        SELECT id_pessoa, nome_pessoa, senha_pessoa 
        FROM pessoa 
        WHERE email_pessoa = $1
    `;

    try {
        const resultPessoa = await db.query(sqlPessoa, [email]);

        if (resultPessoa.rows.length === 0) {
            return res.json({ status: 'senha_incorreta' });
        }

        const { nome_pessoa, senha_pessoa } = resultPessoa.rows[0];
        const senhaBanco = senha_pessoa || '';

        // Suporta senha com hash (bcrypt) ou texto puro
        let senhaValida = false;
        if (senhaBanco.startsWith('$2b$') || senhaBanco.startsWith('$2a$')) {
            senhaValida = await bcrypt.compare(senha, senhaBanco);
        } else {
            senhaValida = (senha === senhaBanco);
        }

        if (!senhaValida) {
            return res.json({ status: 'senha_incorreta' });
        }

        // 🔐 Cria o cookie de sessão
        res.cookie('usuarioLogado', nome_pessoa, {
            sameSite: 'Lax',
            secure: false,       // true apenas em HTTPS
            httpOnly: true,      // JavaScript do cliente não acessa
            path: '/',
            maxAge: 24 * 60 * 60 * 1000, // 24 horas
        });

        return res.json({ status: 'ok', nome: nome_pessoa });

    } catch (err) {
        console.error('Erro ao verificar senha:', err);
        return res.status(500).json({ status: 'erro', mensagem: err.message });
    }
};

// 🔹 Logout: remove o cookie
exports.logout = (req, res) => {
    res.clearCookie('usuarioLogado', {
        sameSite: 'Lax',
        secure: false,
        httpOnly: true,
        path: '/',
    });
    res.json({ status: 'deslogado' });
};

// 🔹 Verifica se o usuário está logado (útil para proteger rotas)
exports.verificaSeUsuarioEstaLogado = (req, res) => {
    const nome = req.cookies.usuarioLogado;

    if (nome) {
        res.json({ status: 'ok', nome });
    } else {
        res.json({ status: 'nao_logado' });
    }
};

// 🔹 Cadastro de nova pessoa (com hash de senha)
exports.criarPessoa = async (req, res) => {
    try {
        const { nome_pessoa, email_pessoa, senha_pessoa } = req.body;

        if (!nome_pessoa || !email_pessoa || !senha_pessoa) {
            return res.status(400).json({ 
                error: 'Nome, email e senha são obrigatórios' 
            });
        }

        const senhaHash = await bcrypt.hash(senha_pessoa, 10);

        const result = await db.query(
            `INSERT INTO pessoa (nome_pessoa, email_pessoa, senha_pessoa) 
             VALUES ($1, $2, $3) RETURNING id_pessoa, nome_pessoa, email_pessoa`,
            [nome_pessoa, email_pessoa, senhaHash]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Erro ao criar pessoa:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};
```

---

## Passo 4: Backend — Rotas de Login

**`backend/routes/loginRoutes.js`**

```javascript
const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.post('/verificarEmail', loginController.verificarEmail);
router.post('/verificarSenha', loginController.verificarSenha);
router.post('/logout', loginController.logout);
router.get('/verificaLogado', loginController.verificaSeUsuarioEstaLogado);
router.post('/cadastrar', loginController.criarPessoa);

module.exports = router;
```

---

## Passo 5: Backend — Servidor Principal

**`backend/server.js`**

```javascript
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();

// 🔧 Middlewares essenciais
app.use(express.json());
app.use(cookieParser()); // 🔑 necessário para ler req.cookies

// 🔧 Servir arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// 🔧 Rotas
const loginRoutes = require('./routes/loginRoutes');
app.use('/login', loginRoutes);

// 🔧 Rota protegida de exemplo
app.get('/menu', (req, res) => {
    if (!req.cookies.usuarioLogado) {
        return res.redirect('/login/login.html');
    }
    res.sendFile(path.join(__dirname, '../frontend/menu/menu.html'));
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
```

> **Dependências necessárias:** `npm install express cookie-parser bcrypt pg`

---

## Passo 6: Frontend — HTML

**`frontend/login/login.html`**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Meu Sistema</title>
    <link rel="stylesheet" href="/login/login.css">
</head>
<body>
    <main class="login-container">
        <section class="login-card">
            <h2>Acesso ao Sistema</h2>

            <form id="formLogin">
                <!-- Etapa 1: E-mail -->
                <div id="etapaEmail" class="form-group">
                    <label for="email">E-mail</label>
                    <input type="email" id="email" 
                           placeholder="seuemail@exemplo.com" 
                           required autocomplete="email">
                    <button type="button" id="btnVerificarEmail" 
                            class="btn-primary">Avançar</button>
                </div>

                <!-- Etapa 2: Senha (oculta por padrão) -->
                <div id="etapaSenha" class="form-group hidden">
                    <p id="saudacaoUsuario" class="saudacao"></p>
                    <label for="senha">Senha</label>
                    <input type="password" id="senha" 
                           placeholder="Sua senha" 
                           autocomplete="current-password">
                    
                    <div class="btn-group">
                        <button type="button" id="btnVoltar" 
                                class="btn-secondary">Voltar</button>
                        <button type="submit" id="btnEntrar" 
                                class="btn-primary">Entrar</button>
                    </div>
                </div>

                <p id="mensagemErro" class="erro-msg"></p>
            </form>
        </section>
    </main>

    <script src="/login/login.js" defer></script>
</body>
</html>
```

---

## Passo 7: Frontend — CSS

**`frontend/login/login.css`**

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f4f6f9;
    color: #2d4a2d;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-container {
    width: 100%;
    max-width: 420px;
    padding: 1.5rem;
}

.login-card {
    background: white;
    padding: 2.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(45, 74, 45, 0.15);
    border: 1px solid #e0f2e0;
    text-align: center;
}

.login-card h2 {
    margin-bottom: 1.5rem;
    color: #2d4a2d;
}

.form-group {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

label {
    font-size: 0.9rem;
    font-weight: 600;
}

input {
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s;
}

input:focus {
    border-color: #2d4a2d;
}

.saudacao {
    font-weight: 600;
    color: #2d4a2d;
    margin-bottom: 0.5rem;
    text-align: center;
}

.btn-group {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;
}

.btn-primary {
    width: 100%;
    padding: 0.75rem;
    background: linear-gradient(135deg, #2d4a2d, #4a7c59);
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.2s;
}

.btn-primary:hover {
    opacity: 0.9;
}

.btn-secondary {
    width: 40%;
    padding: 0.75rem;
    background-color: #e0e0e0;
    color: #333;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
}

.hidden {
    display: none !important;
}

.erro-msg {
    color: #dc3545;
    font-size: 0.85rem;
    margin-top: 1rem;
    min-height: 1.2rem;
}
```

---

## Passo 8: Frontend — JavaScript

**`frontend/login/login.js`**

```javascript
const API_BASE_URL = ''; // mesma origem do servidor

// Elementos do DOM
const formLogin = document.getElementById('formLogin');
const etapaEmail = document.getElementById('etapaEmail');
const etapaSenha = document.getElementById('etapaSenha');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const btnVerificarEmail = document.getElementById('btnVerificarEmail');
const btnVoltar = document.getElementById('btnVoltar');
const saudacaoUsuario = document.getElementById('saudacaoUsuario');
const mensagemErro = document.getElementById('mensagemErro');

// Event Listeners
btnVerificarEmail.addEventListener('click', verificarEmail);
btnVoltar.addEventListener('click', voltarParaEmail);
formLogin.addEventListener('submit', realizarLogin);

// 🔹 Etapa 1: Verifica se o e-mail existe
async function verificarEmail() {
    const email = inputEmail.value.trim();
    mensagemErro.innerText = '';

    if (!email) {
        mensagemErro.innerText = 'Por favor, informe seu e-mail.';
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/login/verificarEmail`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });

        const data = await response.json();

        if (data.status === 'existe') {
            saudacaoUsuario.innerText = `Olá, ${data.nome}!`;
            etapaEmail.classList.add('hidden');
            etapaSenha.classList.remove('hidden');
            inputSenha.focus();
        } else {
            mensagemErro.innerText = 'E-mail não encontrado no sistema.';
        }
    } catch (error) {
        console.error('Erro ao verificar e-mail:', error);
        mensagemErro.innerText = 'Falha ao se comunicar com o servidor.';
    }
}

// 🔹 Volta para a etapa de e-mail
function voltarParaEmail() {
    mensagemErro.innerText = '';
    inputSenha.value = '';
    etapaSenha.classList.add('hidden');
    etapaEmail.classList.remove('hidden');
    inputEmail.focus();
}

// 🔹 Etapa 2: Valida a senha e realiza login
async function realizarLogin(event) {
    event.preventDefault();
    const email = inputEmail.value.trim();
    const senha = inputSenha.value;
    mensagemErro.innerText = '';

    if (!senha) {
        mensagemErro.innerText = 'Por favor, informe sua senha.';
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/login/verificarSenha`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include', // 🔑 envia/recebe cookies
            body: JSON.stringify({ email, senha })
        });

        const data = await response.json();

        if (data.status === 'ok') {
            window.location.href = '/menu';
        } else if (data.status === 'senha_incorreta') {
            mensagemErro.innerText = 'Senha incorreta. Tente novamente.';
        } else {
            mensagemErro.innerText = 'Erro ao efetuar login.';
        }
    } catch (error) {
        console.error('Erro ao realizar login:', error);
        mensagemErro.innerText = 'Falha ao se comunicar com o servidor.';
    }
}
```

---

## Passo 9: Protegendo Rotas no Backend

Para **proteger qualquer rota** (como `/menu` ou CRUDs), crie um **middleware**:

**`backend/middlewares/authMiddleware.js`**

```javascript
function verificaAutenticacao(req, res, next) {
    const usuario = req.cookies ? req.cookies.usuarioLogado : null;

    if (usuario) {
        req.usuario = usuario;
        return next();
    }

    // Se for requisição de API, retorna 401
    if (req.xhr || req.headers.accept?.includes('json')) {
        return res.status(401).json({ error: 'Não autenticado' });
    }

    // Se for navegação, redireciona para o login
    res.redirect('/login/login.html');
}

module.exports = verificaAutenticacao;
```

**Uso nas rotas:**

```javascript
const verificaAutenticacao = require('../middlewares/authMiddleware');

// Protege a página HTML
router.get('/view/crud', verificaAutenticacao, categoriaController.abrirCrudCategoria);

// Protege API
router.get('/listar', verificaAutenticacao, categoriaController.listarCategorias);
```

---

## 🔐 Boas Práticas de Segurança

| Prática | Por quê |
|---------|---------|
| **Hash com bcrypt** | Nunca armazene senhas em texto puro |
| **httpOnly no cookie** | Impede acesso via JavaScript (evita XSS) |
| **sameSite: 'Lax'** | Protege contra CSRF |
| **secure: true em produção** | Cookie só trafega em HTTPS |
| **Mensagem genérica de erro** | Não revele se o erro foi no e-mail ou na senha |
| **Validação no backend** | Nunca confie apenas na validação do frontend |
| **Prepared statements ($1, $2)** | Evita SQL Injection |

---

## 🧪 Testando o Sistema

1. **Cadastre um usuário** (via endpoint `/login/cadastrar` ou Insomnia/Postman):

   ```json
   POST /login/cadastrar
   {
       "nome_pessoa": "João Silva",
       "email_pessoa": "joao@teste.com",
       "senha_pessoa": "123456"
   }
   ```

2. **Acesse** `http://localhost:3000/login/login.html`

3. **Digite o e-mail** → deve aparecer "Olá, João Silva!"

4. **Digite a senha** → deve redirecionar para `/menu`

5. **Teste rota protegida**: tente acessar `/menu` sem estar logado → deve redirecionar para o login.

6. **Logout**: chame `POST /login/logout` → cookie é removido.

---

## 📌 Checklist para o Aluno

- [ ] Tabela `pessoa` criada no banco
- [ ] `database.js` configurado com Pool do PostgreSQL
- [ ] `loginController.js` com `verificarEmail`, `verificarSenha`, `logout`, `criarPessoa`
- [ ] `loginRoutes.js` com as rotas POST
- [ ] `server.js` com `cookieParser` e rotas montadas
- [ ] `login.html` com duas etapas (e-mail e senha)
- [ ] `login.css` com estilos e classe `.hidden`
- [ ] `login.js` com `fetch` e `credentials: 'include'`
- [ ] Middleware de autenticação protegendo rotas
- [ ] Senha com hash bcrypt no cadastro
- [ ] Testado o fluxo completo (login, logout, rota protegida)

---

## 🚀 Próximos Passos (Desafios)

1. **Recuperação de senha** por e-mail
2. **Tela de cadastro** integrada ao frontend
3. **Sessão com JWT** em vez de cookie simples
4. **"Lembrar-me"** com cookie de longa duração
5. **Bloqueio após N tentativas** falhas
6. **Tela de perfil** mostrando dados do usuário logado
7. **Logout automático** por inatividade

---

Com este roteiro, você tem a **base completa** para implementar autenticação em qualquer projeto **Node.js + frontend separado**. Adapte os nomes de tabelas, estilos e mensagens ao contexto do seu sistema! 🎓