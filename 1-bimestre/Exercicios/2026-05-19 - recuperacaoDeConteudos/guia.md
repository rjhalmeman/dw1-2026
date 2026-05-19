# Orientações e Conteúdos para a Avaliação

**Regras para Consulta:** Você pode trazer uma **cola** com exemplos e
anotações. Esta consulta é estritamente limitada a **1 página de papel com
tamanho A4**, que deve ser feita **à mão**.

## O que será avaliado?

### 1. Requisitos 
* **Resolução de problema delimitado (JS):** Qualquer assunto já trabalhado na
  disciplina de algoritmos. Para o primeiro bimestre de DW1, o conteúdo será
  restrito a: **estruturas sequenciais**, **condicionais**, **funções** e
  concatenação de **strings**.

* **Organização do Projeto:** Poderá ser questionado sobre a forma como devem
  ser feitos os projetos. Organização das pastas, nomes, etc.
    
* **Git GitHub:** Isso envolve **criar o repositório**,**clonar o repositório**,
  **adicionar/modificar os arquivos** e **enviar para o github**. Explicação de
  conceitos e comandos via terminal.

### 2. HTML
* **Tags Semânticas:** Compreender a sua **importância** estrutural para a
  página e o seu **uso** adequado.
* **Tags básicas (`<label>, <input>, <button>, <span>, <h1>,<p>,` etc) e
*
* ** Construção e uso de **tabela** (`<table>`),

```html
<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>

```

* **menu suspenso** (`<select>`),
  ```html
<label for="cars">Choose a car:</label>

<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
  ```
* **formulário** (`<form>`) e blocos de divisão (`<div>`). Conceitos.

* enviar dados de uma página para outra usando form/GET. Parâmetros para receber os dados na página de destino.

* **Tag img - Imagens (`<img>`):** Aplicação de imagens compreendendo a
  diferença e o uso de **caminho absoluto** e **caminho relativo**.
  * *Exemplo de caminho relativo:*
    `<img src="./imagens/gato01.jpeg" alt="gato bravo molhado">`

### 3. CSS
* **Seletores:** Utilização correta de seletores para estilizar os elementos da
  página.
* **Uso de Variáveis:** Declaração de variáveis no escopo raiz e aplicação nas
  regras de estilo.
  * *Exemplo:* ```css
    :root { 
      --azul: #2563eb; 
    }
    color: var(--azul);
    ```
* **Principais Propriedades CSS:** Domínio sobre as propriedades de estilização
  base:
  * Cores: `background-color: var(--cor-erro-fundo);` e
    `color: var(--cor-erro-texto);`
  * Espaçamento interno: `padding: 1rem;`
  * Alinhamento: `text-align: center;`
  * Tipografia: `font-weight: bold;`
  * Layout: `display: flex;` (modo básico)

### 4. JavaScript (JS)
* **Lógica (Algoritmo):** Estruturação do pensamento computacional e resolução
  do problema proposto.
* **Validação de Dados:** Implementação de lógicas para **validar os dados
  informados pelo usuário** antes de processá-los ou enviá-los.