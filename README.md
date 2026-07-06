# dw1-2026
## Desenvolvimento Web 1

--- 

### Ementa
Funcionamento da Internet. Linguagem de marcação. Linguagem de estilo. Linguagem de programação JavaScript. Manipulação da DOM.

--- 
# Guia Rápido: Fundamentos do Desenvolvimento Web

Neste resumo, vamos passar pelos cinco pilares essenciais de como a web funciona e como construímos páginas para ela. Pense em um site como uma casa: a Internet é o terreno, o HTML é a estrutura (tijolos), o CSS é a decoração (pintura), o JavaScript é a rede elétrica (funcionalidade) e a DOM é a planta baixa que permite reformar a casa.

---

## 1. Funcionamento da Internet
A internet é uma rede global de computadores interligados. Quando você acessa um site, ocorre uma conversa rápida nos bastidores:



![alt text](./extras/clienteServer.png)


* **Cliente-Servidor:** O seu navegador (Cliente) faz um pedido (requisição) e o computador onde o site está hospedado (Servidor) devolve os arquivos (resposta).
* **HTTP/HTTPS:** É o "idioma" usado para essa conversa. O **"S"** no final significa *Secure* (Seguro), indicando que os dados estão criptografados.
* **DNS:** Funciona como a *agenda de contatos* da internet. Ele traduz nomes fáceis de ler (ex: `google.com`) para endereços numéricos que os computadores entendem (Endereços IP).
* **TCP/IP:** São as regras de transporte. Como um serviço de correios, ele pega os dados do site, divide em pequenos pacotes, envia pela rede e os remonta no seu computador.

---

## 2. Linguagem de Marcação (HTML)
O **HTML** (*HyperText Markup Language*) **não é uma linguagem de programação**, mas sim de marcação. Ele constrói o **esqueleto** da página usando "tags" (etiquetas) para dizer ao navegador o que é cada coisa (um título, um parágrafo, uma imagem).

**Características:**
* Organiza o conteúdo de forma hierárquica (uma tag dentro da outra).
* Traz **semântica**: ajuda leitores de tela e buscadores (como o Google) a entenderem sobre o que é a página.

```html
<!DOCTYPE html> <html>
<head>
    <title>Minha Página</title> </head>
<body>
    <header>
        <h1>Título Principal</h1> </header>
    <main>
        <p>Este é um parágrafo de texto.</p>
        <img src="imagem.jpg" alt="Descrição da imagem para acessibilidade">
        <a href="pagina2.html">Link para outra página</a>
    </main>
</body>
</html>
```

---

## 3. Linguagem de Estilo (CSS)
O **CSS** (*Cascading Style Sheets*) é responsável por toda a **aparência visual**. É ele quem dá cor, tamanho e posicionamento aos elementos HTML. O GitHub aplicará o fundo escuro padrão aos blocos de código como este.



**Conceitos Importantes:**
* **Seletores:** Como você escolhe o elemento que vai estilizar (por tag `body`, por classe `.titulo-destaque`, por ID `#elemento-unico`).
* **Box Model:** Todo elemento HTML é uma "caixa" invisível. O CSS controla o conteúdo (*content*), o preenchimento interno (*padding*), a borda (*border*) e a margem externa (*margin*).
* **Responsividade:** Uso de *Media Queries* para fazer o site se adaptar a celulares, tablets ou TVs.

```css
/* Seleciona pela tag (afeta a página inteira) */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f0f0f0;
}

/* Seleciona pela Classe (.) */
.titulo-destaque {
    color: blue;
    font-size: 24px;
    text-align: center;
}

/* Seleciona pelo ID (#) */
#elemento-unico {
    border: 2px solid red;
    border-radius: 5px; /* Bordas arredondadas */
}
```

---

## 4. Linguagem de Programação (JavaScript)
O **JavaScript (JS)** é o **cérebro e os músculos** da página. É uma linguagem de programação real que adiciona interatividade, lógica e comportamento dinâmico (como abrir menus, validar formulários e buscar dados novos sem recarregar a página).

```javascript
// 1. Variáveis (Guardam dados)
let nome = "João";       // Pode mudar depois
const idade = 25;        // Valor fixo, não muda

// 2. Arrays (Listas) e Objetos (Características)
const frutas = ["maçã", "banana", "laranja"];
const pessoa = {
    nome: "Maria",
    idade: 30,
    profissao: "desenvolvedora"
};

// 3. Estruturas de Controle (Lógica)
if (idade >= 18) {
    console.log("Maior de idade");
}

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// 4. Funções (Ações reaproveitáveis)
function saudacao(nome) {
    return `Olá, ${nome}!`;
}

// 5. Moderno (Arrow Function e Desestruturação - ES6+)
const soma = (a, b) => a + b;
const [primeira, ...resto] = frutas;
```

---

## 5. Manipulação da DOM
A **DOM** (*Document Object Model*) é a **ponte mágica** entre o HTML e o JavaScript. Quando o navegador lê o HTML, ele transforma todas as tags em um formato de "árvore" de objetos. O JavaScript usa essa árvore para modificar o site em tempo real.



```javascript
// Acessando a DOM: Selecionando elementos do HTML
const elemento = document.getElementById("meu-id");
const elementos = document.getElementsByClassName("minha-classe");
const paragrafo = document.querySelector("p.destaque");

// Ação 1: Modificar conteúdo
elemento.textContent = "Novo texto inserido via JS";
elemento.innerHTML = "<strong>Texto em negrito</strong>";

// Ação 2: Modificar atributos e estilos
elemento.setAttribute("class", "nova-classe");
elemento.style.color = "red";
elemento.style.backgroundColor = "black";

// Ação 3: Criar e inserir elementos do zero
const novoDiv = document.createElement("div");
novoDiv.textContent = "Elemento criado dinamicamente";
document.body.appendChild(novoDiv);

// Ação 4: Ouvir Eventos (Interatividade do usuário)
document.getElementById("botao").addEventListener("click", function() {
    alert("Botão clicado!");
});

// Ação 5: Remover elementos
const elementoRemover = document.getElementById("remover");
elementoRemover.remove();
```

--- 




# Projetos 

### Requisitos conectando Frontend, Backend e Banco de Dados.

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
    - [ ] `express.static`: Para servir arquivos estáticos (usado para mostrar imagens).
- [ ] **Arquitetura:** Diferenciar claramente o que roda no cliente (navegador) e o que roda no servidor.
- [ ] **JS Moderno:** Uso de `Arrow Functions`, `Async/Await`, `Try/Catch` e manipulação de `JSON`.
- [ ] **Estrutura MVC:** Organização rígida em Rotas (Router), Controladores (Controller) e Servidor (Server).
- [ ] **Segurança & Configuração:**
    - [ ] Uso de **Cookies** para manter a sessão logada.   

### 🗄️ Banco de Dados
- [ ] **SQL Direto:** Conexão (driver do banco) e execução de querys SQL puras sem uso de ORM.
- [ ] **Modelagem:** Criar DER (Diagrama Entidade-Relacionamento).

### 🛠️ Ferramentas
- [ ] **Git/GitHub:** Clonar repositório, criar branches, commits, push, pull e pull requests.
- [ ] **VS Code:** Uso do terminal integrado e extensões (ex: REST Client ou Thunder Client para testes de rota é recomendável).

---

## 🚀 Parte 1: O Projeto 

**Objetivo:** Desenvolver um sistema web completo simulando um E-commerce ou Sistema de Gestão. O projeto deve seguir a estrutura de pastas do modelo fornecido, implementando **acesso direto ao banco de dados**.

🔗 **Modelo Base:** [https://github.com/rjhalmeman/dw1-modelo-4bim.git](https://github.com/rjhalmeman/dw1-modelo-4bim.git)

### Estrutura proposta (olhar modelo)

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
