# Projeto de DW1 - 2º Bimestre 2026 - Atividade avaliativa

Projeto de **Desenvolvimento Web 1 (DW1)**. O objetivo é desenvolver uma aplicação funcional baseada na **arquitetura cliente/servidor**.

### Valerá 40% da nota bimestral.

---

## 1. Escopo e Tema
* **Tema:** Livre, desde que relacionado a uma atividade do mundo real.
* **Data Limite:** 30/06/2026.
* **Forma de Entrega:** mandar o projeto um repositório no **GitHub**.
* **Preencher formulário de entrega** [Preecher formulário de entrega](https://forms.gle/TYXB1qsmaCk3e2nq5)

## 2. Requisitos de Front-End (Cliente)
A interface deve ser funcional e seguir boas práticas de desenvolvimento web:
* **Estrutura Semântica:** Uso obrigatório de tags HTML5 (como `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<aside>`).
* **Estilização:** Aplicação de **CSS** para layout e design.
* **Conteúdo:** Mínimo de 1 página HTML com pelo menos duas imagens integradas.
* **Elementos Obrigatórios:**
    * **Cabeçalho:** Nome do projeto em destaque.
    * **Rodapé:** Nome completo do aluno.
* **Interatividade:** A página deve realizar, no mínimo, **3 chamadas (rotas) ao servidor** via JavaScript (ex: `fetch` API).

## 3. Requisitos de Back-End (Servidor e Banco de Dados)
O servidor deve atuar como a camada de lógica e persistência:
* **Servidor:** Construído em **Node.js**.
* **Rotas:** O servidor deve expor, no mínimo, **3 rotas distintas** (endpoints), cada uma realizando consultas e devolvendo dados em formato JSON para o cliente.
* **Banco de Dados:** Conexão obrigatória com um banco de dados relacional.
* **Modelagem:** O banco deve possuir, no mínimo, **2 tabelas relacionadas** entre si.
* **Apenas consultas ao banco de dados** (select). Os inserts, updates e deletes só no próximo bimestre.
* **DDL** O projeto deve ter um arquivo com o código de criação das tabelas e comandos para popular as tabelas (a serem executados no PGAdmin4 ou DBeaver). Popule com mínimo 10 registros em cada tabela.


## 4. Versionamento e Repositório (Git/GitHub)
A gestão de código é parte fundamental da nota:
* **Nomenclatura do Repositório:** `NomeDoAluno_2bim_NomeProjeto`.
* **Colaboração:** Adicione o usuário `rjhalmeman@gmail.com` como colaborador do projeto.
* **Arquivos Essenciais:**
    * `.gitignore`: Essencial para excluir pastas como `node_modules`.
    * `README.md`: Documentação textual detalhada explicando o funcionamento, tecnologias utilizadas e como rodar o projeto.

## 5. Avaliação e Apresentação
Esteja preparado para a sabatina técnica:
* **Explicação:** Você deverá explicar o fluxo de dados entre cliente e servidor.
* **Código-Fonte:** O professor poderá realizar questionamentos sobre o código, solicitar explicações sobre funções específicas ou pedir comentários adicionais.
* **Modificações:** Esteja pronto para realizar pequenas alterações ou refatorações solicitadas pelo professor durante a apresentação.

---

### Dicas para o Sucesso
1.  **Arquitetura:** Foque no entendimento de como o **JSON** transita entre o Node.js e o navegador.
2.  **Boas Práticas:** Mantenha o código limpo, identado e com comentários explicativos sobre as lógicas complexas.
3.  **Semântica:** Use as tags HTML de forma correta; isso é um diferencial de qualidade profissional.
4.  **Organização:** Garanta que seu `README.md` esteja claro e informativo, funcionando como um manual para quem for avaliar o seu trabalho.

