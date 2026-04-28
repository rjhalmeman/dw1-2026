# Comunicação entre Páginas com HTML e JavaScript


## 1. O Conceito Principal: Query Strings

O alicerce deste projeto é o uso do **método GET**. Diferente do método POST (onde os dados vão no corpo da requisição), o GET anexa as informações diretamente na **URL** da página de destino.

* **Query String:** É a parte da URL que começa após o caractere `?`. 
* **Estrutura:** Ela funciona em pares de **chave=valor**. 
* **Exemplo:** Em `primeira.html?palavra=Cafe`, a chave é `palavra` e o valor é `Cafe`.

---

## 2. Arquitetura do Fluxo de Dados

O fluxo foi desenhado para permitir que um único campo de entrada envie dados para destinos diferentes.

### A Página de Origem (`index.html` & `scriptIndex.js`)
Em vez de usar um comportamento de formulário estático, o código emprega uma **estratégia dinâmica**:

1.  **O Formulário Oculto:** O uso de um `<form>` com `display: none` serve como um **veículo de transporte**. Ele está lá apenas para aproveitar a capacidade nativa do navegador de formatar URLs.
2.  **A Função `enviar(destino)`:** Esta função atua como um controlador:
    * **Captura:** Coleta o valor do `input` de texto visível.
    * **Injeção:** Transfere esse valor para o `input hidden` dentro do formulário oculto.
    * **Roteamento:** Altera a propriedade `action` do formulário em tempo de execução para definir se o destino será `primeira.html` ou `segunda.html`.
    * **Execução:** Dispara o método `form.submit()`.

### As Páginas de Destino (`primeira.html` / `segunda.html` & `scriptSubPaginas.js`)
As páginas de destino são receptores passivos que utilizam o mesmo script para processar a entrada:

* **API URLSearchParams:** É uma ferramenta moderna do JavaScript que permite "escanear" a URL em busca de parâmetros específicos sem a necessidade de manipulações complexas de strings ou Expressões Regulares.
* **Lógica de Fallback:** O script tenta capturar o valor de `palavra`. Caso a página seja acessada diretamente (sem parâmetros), ele exibe a mensagem padrão **"Nenhuma palavra enviada"**, garantindo que o código não quebre.

---

## 3. Pontos Fortes e Melhores Práticas

* **Princípio DRY (Don't Repeat Yourself):** Ao utilizar o mesmo arquivo `scriptSubPaginas.js` para ambas as páginas de destino, evita a repetição de lógica, facilitando a manutenção.
* **Separação de Preocupações:** O HTML cuida da estrutura, o CSS da apresentação (usando **Flexbox** para garantir uma interface centralizada e responsiva) e o JavaScript do comportamento.
* **Didática Fundamental:** Este método é a base para entender como a web funciona antes de avançar para conceitos de persistência como `localStorage`, `SessionStorage` ou o uso de `Cookies`.

