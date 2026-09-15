
# Projeto de DW1 - 3º Bimestre 2026 - Atividade Avaliativa
Desenvolvimento de uma **aplicação web funcional** baseada na **arquitetura Cliente/Servidor** e padrão **MVC (Model-View-Controller)**, integrada ao **PostgreSQL**.
* **Peso:** 60% da nota bimestral.
## 1. Escopo e Tema
* **Tema:** Livre, simulando um contexto do mundo real (ex.: e-commerce, gestão imobiliária).
* **Data Limite:** **01/10/2026** até 23h59.
* **Entrega:** Link do repositório no **GitHub** via [Formulário Oficial](https://forms.gle/TYXB1qsmaCk3e2nq5).

# O projeto **candshop** deve ser usado como parâmetro de organização da arquitetura

## 2. Requisitos de Front-End (Cliente)
* **Estrutura Semântica:** Uso obrigatório de **tags HTML5** (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<aside>`).
* **Estilização e Páginas:** **CSS externo** e no mínimo **4 páginas HTML** interligadas.
* **Componentes Obrigatórios:** **Cabeçalho** (nome/logo), **Menu de Navegação** (acesso às rotas) e **Rodapé** (nome completo, turma, ano).
* **Gerenciamento de Imagens:** Ao menos um **CRUD** deve permitir cadastro e exibição de **imagens** (upload local ou caminho/URL no banco).
## 3. Requisitos de Back-End e Banco de Dados (Servidor)
* **Ambiente de Execução:** **Node.js** com separação em **Router** (mapeamento de endpoints) e **Controllers** (lógica de negócios).
* **Banco de Dados Relacional:** Conexão com **PostgreSQL** via variáveis de ambiente no arquivo **`.env`** (`DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`).
* **Modelagem de Dados:** Mínimo com **1 tabela independente**, **1 tabela com relacionamento 1:N** e **1 tabela com relacionamento 1:1**.
* **Arquivo DDL e Carga Inicial:** Arquivo `.sql` com comandos `CREATE TABLE` (chaves primárias/estrangeiras) e `INSERT INTO` (mínimo de **10 registros por tabela**).
## 4. Versionamento e Repositório (Git/GitHub)
* **Nomenclatura Padrão:** `NomeDoAluno_3bim_NomeProjeto`.
* **Colaboração:** Adicionar o usuário `rjhalmeman@gmail.com` como **colaborador**.
* **Arquivos Obrigatórios:** **`.gitignore`** (ignorando `node_modules/` e `.env`) e **`README.md`** (documentação, diagrama do banco e guia de execução).
## 5. Critérios de Avaliação e Sabatina Técnica
| Critério | Descrição |
| :--- | :--- |
| **Funcionamento e Requisitos** | Aplicação executando sem erros, com 4 páginas, navegação e integração com **PostgreSQL**. |
| **Arquitetura e Código** | Organização em **rotas/controllers**, uso de **.env** e modelagem correta (**1:1** e **1:N**). |
| **Arguição Técnica** | Explicação do **código-fonte**, funções e fluxo de requisição/resposta. |
| **Modificação ao Vivo** | Execução de alterações simples no código ou consultas **SQL** solicitadas durante a defesa. |
