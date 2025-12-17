# dw1-2026
## Desenvolvimento Web 1

Projeto de desenvolvimento web. Requisitos conectando Frontend, Backend e Banco de Dados.

---

## 🧠 O que você precisa saber (Checklist de Habilidades)

Para realizar este projeto, o grupo precisa dominar os seguintes conceitos utilizados no modelo base.

### 🎨 Frontend
- [ ] **HTML & CSS:** Estruturação semântica e estilização (nível intermediário).
- [ ] **JavaScript:** Manipulação do DOM e eventos.
- [ ] **Fetch API:** Para consumir dados do backend (GET, POST, PUT, DELETE).

### ⚙️ Backend & Lógica (Node.js)
- [ ] **Node.js & NPM:** Saber inicializar um projeto, usar o `package.json` e instalar dependências (`npm install`).
    - [ ] node_modules e .gitignore
- [ ] **Express.js:** Configuração do servidor e gerenciamento de rotas.
- [ ] **Middlewares Essenciais:**
    - [ ] `express.json`: Para o servidor entender JSON.
    - [ ] **`cors`**: Para permitir que o Frontend acesse o Backend sem bloqueios de segurança.
    - [ ] `express.static`: Para servir arquivos estáticos (se necessário).
- [ ] **Arquitetura:** Diferenciar claramente o que roda no cliente (navegador) e o que roda no servidor.
- [ ] **JS Moderno:** Uso de `Arrow Functions`, `Async/Await`, `Try/Catch` e manipulação de `JSON`.
- [ ] **Estrutura MVC:** Organização rígida em Rotas (Router), Controladores (Controller) e Servidor (Server).
- [ ] **Segurança & Configuração:**
    - [ ] Uso de **Cookies** para manter a sessão logada.
    - [ ] Uso de **Variáveis de Ambiente (.env)** para ocultar senhas do banco de dados.

### 🗄️ Banco de Dados
- [ ] **SQL Direto:** Conexão (driver do banco) e execução de querys SQL puras sem uso de ORM.
- [ ] **Modelagem:** Criar DER (Diagrama Entidade-Relacionamento) usando **DBeaver**.

### 🛠️ Ferramentas
- [ ] **Git/GitHub:** Clonar repositório, criar branches, commits, push, pull e pull requests.
- [ ] **VS Code:** Uso do terminal integrado e extensões (ex: REST Client ou Thunder Client para testes de rota é recomendável).

---

## 🚀 Parte 1: O Projeto 

**Objetivo:** Desenvolver um sistema web completo simulando um E-commerce ou Sistema de Gestão. O projeto deve seguir a estrutura de pastas do modelo fornecido, implementando **acesso direto ao banco de dados**.

🔗 **Modelo Base:** [https://github.com/rjhalmeman/dw1-modelo-4bim.git](https://github.com/rjhalmeman/dw1-modelo-4bim.git)

### Estrutura proposta (exemplo)
.
├── backend
│   ├── controllers
│   │   ├── cargoController.js
│   │   ├── clienteController.js
│   │   ├── forma_pagamentoController.js
│   │   ├── funcionarioController.js
│   │   ├── imageController.js
│   │   ├── loginController.js
│   │   ├── menuController.js
│   │   ├── pagamentoController.js
│   │   ├── pedidoController.js
│   │   ├── pedido_has_produtoController.js
│   │   ├── pessoaController.js
│   │   └── produtoController.js
│   ├── database.js
│   ├── routes
│   │   ├── cargoRoutes.js
│   │   ├── clienteRoutes.js
│   │   ├── forma_pagamentoRoutes.js
│   │   ├── funcionarioRoutes.js
│   │   ├── imageRoutes.js
│   │   ├── loginRoutes.js
│   │   ├── menuRoutes.js
│   │   ├── pagamentoRoutes.js
│   │   ├── pedido_has_produtoRoutes.js
│   │   ├── pedidoRoutes.js
│   │   ├── pessoaRoutes.js
│   │   └── produtoRoutes.js
│   └── server.js
├── documentacao
│   ├── 4º bimestre - avaliação - dw1.md
│   ├── CandyShopDER.png
│   ├── dumpDBeaver-candyshop-202511180647.sql
│   ├── estrutura.txt
│   ├── scriptCandyShop.sql
│   └── tutorial.md
├── frontend
│   ├── cargo
│   │   ├── cargo.css
│   │   ├── cargo.html
│   │   └── cargo.js
│   ├── forma_pagamento
│   │   ├── forma_pagamento.css
│   │   ├── forma_pagamento.html
│   │   └── forma_pagamento.js
│   ├── login
│   │   ├── login.css
│   │   ├── login.html
│   │   └── login.js
│   ├── menu.css
│   ├── menu.html
│   ├── menu.js
│   ├── pedido
│   │   ├── pedido.css
│   │   ├── pedido.html
│   │   ├── pedido.js
│   │   ├── pesquisaDinamicaCliente.js
│   │   └── pesquisaDinamicaStyle.css
│   ├── pessoa
│   │   ├── pessoa.css
│   │   ├── pessoa.html
│   │   └── pessoa.js
│   ├── produto
│   │   ├── produto.css
│   │   ├── produto.html
│   │   └── produto.js
│   ├── testes
│   │   ├── dragavel
│   │   │   ├── index.html
│   │   │   └── style.css
│   │   ├── EmOrdem.html
│   │
│   └── visaoCliente
│       ├── carrinho
│       │   ├── carrinho.css
│       │   ├── carrinho.html
│       │   └── carrinho.js
│       ├── finalizar
│       │   ├── finalizar.css
│       │   ├── finalizar.html
│       │   └── finalizar.js
│       └── pagamento
│           ├── pagamento.css
│           ├── pagamento.html
│           └── pagamento.js
├── imagens
│   └── produto
│       ├── 000.png
│   
├── index.html
├── package.json
├── package-lock.json
├── p.sh
├── push.sh
├── pushTo.sh
├── README.md
└── ss


### 👥 Perfis de Acesso

O sistema deve comportar dois tipos de usuários, ambos manipulando o mesmo banco de dados:

#### 1. Cliente 👤
- **Login:** Acesso via credenciais (mantido por cookies).
- **Compras:** Interface para selecionar produtos e realizar "pedidos" (INSERT no banco).
- **Meus Pedidos:** Visualização do histórico de compras realizadas (SELECT com filtro).
- **Financeiro:** Registro de pagamento do pedido.

#### 2. Gerente 👔
- **Gestão Completa (CRUDs):** Acesso total para criar, editar e excluir registros.
- **Gestão de Pedidos:** Visualizar e editar status dos pedidos dos clientes.
- **Relatórios:** Gerar **2 relatórios** distintos (ex: "Vendas por Mês", "Estoque Baixo") formatados em HTML simples para impressão.

### 🏗️ Requisitos Técnicos Obrigatórios

#### Estrutura do Banco de Dados
O banco deve conter tabelas que demonstrem os seguintes relacionamentos para a criação das telas de CRUD:
1.  **Tabela Simples:** 1 CRUD sem dependências (ex: Cadastro de Categorias).
2.  **Relacionamento 1:N:** 1 CRUD completo (ex: Uma categoria tem vários produtos).
3.  **Relacionamento N:M:** 1 CRUD completo (ex: Pedidos e Produtos).
4.  **Relacionamento 1:1:** 1 CRUD completo (ex: Detalhes do Usuário ou Configuração do Sistema).

#### Organização de Arquivos
- **Backend:** O servidor deve ser modularizado. Arquivos separados para `server`, `router` e `controller`.
- **Frontend:** Cada CRUD deve ter sua própria pasta (módulo) contendo seu respectivo trio de arquivos: `HTML`, `JS` e `CSS`.
- **Configuração:** As credenciais do banco de dados devem estar em um arquivo `.env` (não suba este arquivo para o GitHub, use o `.gitignore`). O pacote `cors` deve estar configurado no `server.js`.

---

## 📝 Documentação Necessária

Na raiz do projeto, crie uma pasta chamada `Documentacao` contendo:
1.  **DER (Diagrama Entidade-Relacionamento):** Imagem ou arquivo exportado do DBeaver.
2.  **Script de Criação (DDL):** Código SQL para criar o banco e as tabelas.
3.  **Script de População (DML):** Código SQL com dados fictícios para teste imediato.

---

## 📘 Parte 2: Relatório de Aprendizagem

Este relatório deve ser escrito diretamente no arquivo `README.md` do repositório final.

**Tamanho:** Mínimo de 1 página, máximo de 3 páginas (padrão A4 aproximado).

**O que abordar:**
1.  **Resumo do Projeto:** O que foi construído?
2.  **Tecnologias e Conceitos:** Como aplicaram a estrutura MVC, Fetch, CORS, Async/Await e Cookies?
3.  **Dificuldades:** O que foi mais difícil? (Ex: Configurar o `.env`, conectar o banco, entender o assincronismo, CSS, Git). Como resolveram?
4.  **IA:** Utilizaram IA (ChatGPT/Gemini)? Onde ela ajudou e onde ela pode ter atrapalhado o aprendizado?
5.  **Preferências:** Qual parte o grupo gostou mais? Frontend ou Backend?

---

## ✅ Checklist de Entrega

Para garantir a nota máxima, verifique se:

- [ ] O projeto está no GitHub com o código fonte atualizado.
- [ ] As dependências (`node_modules`) **não** foram enviadas (uso correto do `.gitignore`).
- [ ] O `README.md` contém o relatório de aprendizagem.
- [ ] A pasta `Documentacao` contém o DER e os scripts SQL.
- [ ] O sistema faz Login e usa Cookies.
- [ ] O **CORS** está configurado e o Frontend consegue se comunicar com o Backend.
- [ ] Existem os 4 tipos de CRUDs solicitados.
- [ ] O acesso ao dados é feito via SQL direto (sem ORM).
- [ ] O projeto roda sem erros de sintaxe ao executar `npm start`.
