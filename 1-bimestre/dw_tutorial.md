# Tutorial Essencial: Construindo Aplicações Web com HTML, CSS, JS e IA

## 📋 Índice
- [Introdução](#introdução)
- [1. HTML Essencial](#1-html-essencial)
  - [1.1 Estrutura Semântica](#11-estrutura-semântica)
  - [1.2 Formulários e Interação](#12-formulários-e-interação)
- [2. Manipulação do DOM com JavaScript](#2-manipulação-do-dom-com-javascript)
  - [2.1 Selecionando Elementos](#21-selecionando-elementos)
  - [2.2 Modificando Conteúdo e Atributos](#22-modificando-conteúdo-e-atributos)
  - [2.3 Criando e Removendo Elementos](#23-criando-e-removendo-elementos)
  - [2.4 Eventos](#24-eventos)
- [3. CSS Essencial](#3-css-essencial)
  - [3.1 Seletores: Classes, ID e Hierarquia](#31-seletores-classes-id-e-hierarquia)
  - [3.2 Box Model e Layout Básico](#32-box-model-e-layout-básico)
  - [3.3 Cores, Fontes e Responsividade](#33-cores-fontes-e-responsividade)
- [4. Projeto Prático: Lista de Tarefas](#4-projeto-prático-lista-de-tarefas)
  - [4.1 Estrutura HTML](#41-estrutura-html)
  - [4.2 Estilização CSS](#42-estilização-css)
  - [4.3 Interatividade JavaScript](#43-interatividade-javascript)
- [5. Como Usar IA para Acelerar o Aprendizado](#5-como-usar-ia-para-acelerar-o-aprendizado)
  - [5.1 Prompts Úteis](#51-prompts-úteis)
  - [5.2 Boas Práticas ao Usar IA](#52-boas-práticas-ao-usar-ia)
- [Conclusão e Próximos Passos](#conclusão-e-próximos-passos)

---

## Introdução

Seus alunos já sabem criar algoritmos com HTML e JavaScript. Agora, vamos dar o próximo passo: **estruturar páginas com HTML semântico, estilizar com CSS e interagir dinamicamente com o DOM (Document Object Model)**.

A IA será uma aliada poderosa para acelerar o aprendizado, prototipar ideias e resolver dúvidas rapidamente. Este tutorial fornece os fundamentos necessários para que os alunos possam construir aplicações web completas.

---

## 1. HTML Essencial

### 1.1 Estrutura Semântica

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Minha primeira aplicação web">
    <title>Minha Aplicação</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="home">
            <h1>Bem-vindo à Minha Aplicação</h1>
            <p>Esta é uma aplicação web moderna e responsiva.</p>
        </section>
        
        <section id="sobre">
            <h2>Sobre Nós</h2>
            <article>
                <h3>Nossa História</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </article>
        </section>
        
        <section id="contato">
            <h2>Contato</h2>
            <form id="contatoForm">
            </form>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2025 Minha Aplicação. Todos os direitos reservados.</p>
    </footer>
    
    <script src="script.js"></script>
</body>
</html>
```

---

### 1.2 Formulários e Interação

Os formulários são a principal maneira de capturar a entrada de dados dos usuários.

```html
<form id="meuFormulario">
    <div class="campo">
        <label for="nome">Nome Completo:</label>
        <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required>
    </div>
    
    <div class="campo">
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" placeholder="exemplo@email.com" required>
    </div>

    <button type="submit">Enviar Mensagem</button>
</form>
```

---

## 2. Manipulação do DOM com JavaScript

O DOM é a representação em árvore da página.

### 2.1 Selecionando Elementos

```javascript
const titulo = document.getElementById('titulo-principal');
const primeiroBotao = document.querySelector('.btn-primario');
const todosItens = document.querySelectorAll('li.item-lista');
```

---

### 2.2 Modificando Conteúdo e Atributos

```javascript
const paragrafo = document.querySelector('.descricao');

paragrafo.textContent = 'Este é o novo texto da descrição.';
paragrafo.innerHTML = 'Este é o <strong>novo</strong> texto.';

const imagem = document.querySelector('img');
imagem.setAttribute('src', 'nova-imagem.jpg');
imagem.setAttribute('alt', 'Descrição da nova imagem');

paragrafo.classList.add('destaque');
paragrafo.classList.remove('oculto');
paragrafo.classList.toggle('ativo');
```

---

### 2.3 Criando e Removendo Elementos

```javascript
const lista = document.querySelector('#minha-lista');

const novoItem = document.createElement('li');
novoItem.textContent = 'Novo item da lista';
novoItem.classList.add('item-novo');

lista.appendChild(novoItem);

// novoItem.remove();
```

---

### 2.4 Eventos

```javascript
const botao = document.querySelector('#meuBotao');

botao.addEventListener('click', function(evento) {
    evento.preventDefault();
    alert('O botão foi clicado!');
});

const form = document.querySelector('#meuFormulario');

form.addEventListener('submit', function(evento) {
    evento.preventDefault();
    console.log('Formulário enviado com sucesso!');
});
```

---

## 3. CSS Essencial

### 3.1 Seletores

```css
p {
    line-height: 1.5;
}

.alerta {
    color: red;
    font-weight: bold;
}

#cabecalho-principal {
    background-color: #333;
}

nav li a {
    text-decoration: none;
    color: white;
}
```

---

### 3.2 Box Model

```css
.caixa {
    width: 300px;
    padding: 20px;
    border: 2px solid black;
    margin: 15px;
    box-sizing: border-box;
}

.container-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

---

### 3.3 Responsividade

```css
body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f9;
    color: #333;
}

@media (max-width: 768px) {
    .container-flex {
        flex-direction: column;
    }
    
    h1 {
        font-size: 1.5rem;
    }
}
```

---

## 4. Projeto Prático: Lista de Tarefas

### 4.1 HTML

```html
<div class="todo-container">
    <h2>Minhas Tarefas</h2>
    <form id="todo-form">
        <input type="text" id="nova-tarefa" placeholder="O que você precisa fazer?" required>
        <button type="submit">Adicionar</button>
    </form>
    <ul id="lista-tarefas"></ul>
</div>
```

---

### 4.2 CSS

```css
.todo-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background: white;
    border-radius: 8px;
}

#todo-form {
    display: flex;
    gap: 10px;
}

.tarefa-item {
    display: flex;
    justify-content: space-between;
}
```

---

### 4.3 JavaScript

```javascript
const form = document.getElementById('todo-form');
const inputTarefa = document.getElementById('nova-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const li = document.createElement('li');
    li.textContent = inputTarefa.value;
    
    listaTarefas.appendChild(li);
    inputTarefa.value = '';
});
```

---

## 5. Como Usar IA

### Prompts

- Explique como iniciante  
- Encontre erros  
- Gere exemplos  

### Boas práticas

- Não copiar sem entender  
- Perguntar o porquê  
- Praticar  

---

## Conclusão

HTML + CSS + JS = base do desenvolvimento web.

---

## Próximos Passos

- Git e GitHub  
- APIs  
- React  

🚀 Pratique sempre!
