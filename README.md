# dw1-2026
## Desenvolvimento Web 1

Projeto de desenvolvimento web. Requisitos conectando Frontend, Backend e Banco de Dados.

---

## 🧠 O que você precisa saber (Checklist de Habilidades)

Para realizar este projeto, precisa dominar os seguintes conceitos. 

### 🎨 Frontend
- [ ] **HTML & CSS:** Estruturação semântica e estilização (nível intermediário).
- [ ] **JavaScript:** Manipulação do DOM e eventos.
- [ ] **Fetch API:** Para consumir dados do backend.

### ⚙️ Backend & Lógica
- [ ] **Arquitetura:** Diferenciar claramente o que roda no cliente (navegador) e o que roda no servidor.
- [ ] **JS Moderno:** Uso de `Arrow Functions`, `Async/Await`, `Try/Catch` e manipulação de `JSON`.
- [ ] **Estrutura MVC:** Organização em Rotas (Router), Controladores (Controller) e Servidor (Server).
- [ ] **Segurança:** Uso de **Cookies** para manter a sessão do usuário logada.

### 🗄️ Banco de Dados
- [ ] **SQL Direto:** Conexão e comandos SQL sem uso de ORM.
- [ ] **Modelagem:** Criar DER usando **DBeaver**.

### 🛠️ Ferramentas
- [ ] **Git/GitHub:** Clonar repositório, criar branches, commits, push, pull e pull requests.

---

## 🚀 Parte 1: O Projeto Prático (8,0 Pontos)

**Objetivo:** Desenvolver um sistema web completo simulando um E-commerce ou Sistema de Gestão. O projeto deve seguir o modelo base fornecido, mas com implementação de **acesso direto ao banco de dados** (sem ORM).

🔗 **Modelo Base:** [https://github.com/rjhalmeman/dw1-modelo-4bim.git](https://github.com/rjhalmeman/dw1-modelo-4bim.git)

### 👥 Perfis de Acesso

O sistema deve comportar dois tipos de usuários, ambos manipulando o mesmo banco de dados:

#### 1. Cliente 👤
- **Login:** Acesso via credenciais (cookies).
- **Compras:** Interface para selecionar produtos e realizar "pedidos".
- **Meus Pedidos:** Visualização do histórico de compras realizadas.
- **Financeiro:** Registro de pagamento do pedido.

#### 2. Gerente 👔
- **Gestão Completa (CRUDs):** Acesso total às tabelas do sistema.
- **Gestão de Pedidos:** Visualizar e editar status dos pedidos dos clientes.
- **Relatórios:** Gerar **2 relatórios** distintos (ex: "Vendas por Mês", "Estoque Baixo") formatados para impressão.

### 🏗️ Requisitos Técnicos Obrigatórios

#### Estrutura do Banco de Dados
O banco deve conter tabelas que demonstrem os seguintes relacionamentos para a criação das telas de CRUD:
1.  **Tabela Simples:** 1 CRUD sem dependências (ex: Cadastro de Categorias).
2.  **Relacionamento 1:N:** 1 CRUD completo (ex: Uma categoria tem vários produtos).
3.  **Relacionamento N:M:** 1 CRUD completo (ex: Pedidos e Produtos).
4.  **Relacionamento 1:1:** 1 CRUD completo (ex: Detalhes do Usuário ou Configuração).

#### Organização de Arquivos
- **Backend:** O servidor deve ser modularizado. Arquivos separados para `server`, `router` e `controller`.
- **Frontend:** Cada CRUD deve ter sua própria pasta contendo seu respectivo trio de arquivos: `HTML`, `JS` e `CSS`.

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
2.  **Tecnologias e Conceitos:** Como aplicaram Fetch, Async/Await, Cookies, etc.?
3.  **Dificuldades:** O que foi mais difícil? (Ex: Conectar o banco, entender o assincronismo, CSS, Git). Como resolveram?
4.  **IA:** Utilizaram IA (ChatGPT/Gemini)? Onde ela ajudou e onde ela pode ter atrapalhado o aprendizado?
5.  **Preferências:** Qual parte o grupo gostou mais? Frontend ou Backend?

---

## ✅ Checklist de Entrega

Para garantir a nota máxima, verifique se:

- [ ] O projeto está no GitHub com o código fonte.
- [ ] O `README.md` contém o relatório de aprendizagem.
- [ ] A pasta `Documentacao` contém o DER e os scripts SQL.
- [ ] O sistema faz Login e usa Cookies.
- [ ] Existem os 4 tipos de CRUDs solicitados.
- [ ] O acesso ao dados é feito via SQL direto (sem ORM).
- [ ] O projeto roda sem erros de sintaxe.
