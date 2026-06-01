# Gabarito — Avaliação DW1 — 1º Bimestre — 2026 — RP
## Questão 1 — Desenho das Telas

### Tela `index.html`

```text
---------------------------------------------------
|         Cálculo de Frete & Comissão             |
---------------------------------------------------

Valor da Encomenda (R$):  [________________________]
Distância do Destino (Km):[________________________]
Classificação da Carga:[ Selecionar opção ▼ ]
                [ Calcular e Enviar ]
```



### Tela `paginaResposta.html`

```text
---------------------------------------------------
|        Resumo Financeiro da Entrega             |
---------------------------------------------------

Detalhamento de Custos

Valor Base da Encomenda: R$ 0,00
Taxa por Distância: R$ 0,00
Taxa Fixa por Carga: R$ 0,00
Custo Total do Frete: R$ 0,00
Comissão do Entregador: R$ 0,00

-----------------------------------

Valor Total da Operação: R$ 0,00


          [ Voltar e Simular Novamente ]
```
Os desenhos das telas, considerando o HTML, não precisam ser perfeitos no posicionamento, pois quem vai estilizar é o CSS. Mas precisam aparecer todos os elementos e textos.


# Questão 2 — Script Necessário

```javascript
window.onload = function () {
    // Captura os parâmetros enviados pela URL
    let parametros = new URLSearchParams(window.location.search);
    // Obtém os valores enviados pelo formulário
    let valorEncomenda = Number(parametros.get("valor"));
    let distancia = Number(parametros.get("distancia"));
    let carga = parametros.get("carga");
    // Variável para armazenar a taxa fixa da carga
    let taxaCarga = 0;
    // Define a taxa conforme o tipo da carga
    if (carga === "leve") {
        taxaCarga = 10;
    }
    else if (carga === "media") {
        taxaCarga = 20;
    }
    else if (carga === "pesada") {
        taxaCarga = 35;
    }
    else if (carga === "extra_pesada") {
        taxaCarga = 50;
    }
    // Calcula taxa da distância
    let taxaDistancia = distancia * 1.20;
    // Calcula frete
    let valorFrete = taxaDistancia + taxaCarga;
    // Calcula valor total
    let valorTotal = valorEncomenda + valorFrete;
    // Calcula comissão
    let comissao = valorTotal * 0.05;
    // Exibe os resultados na tela
    document.getElementById("res-encomenda").innerHTML = "R$ " + valorEncomenda.toFixed(2);
    document.getElementById("res-distancia").innerHTML = "R$ " + taxaDistancia.toFixed(2);
    document.getElementById("res-peso").innerHTML = "R$ " + taxaCarga.toFixed(2);
    document.getElementById("res-frete").innerHTML ="R$ " + valorFrete.toFixed(2);
    document.getElementById("res-comissao").innerHTML ="R$ " + comissao.toFixed(2);
    document.getElementById("res-total").innerHTML ="R$ " + valorTotal.toFixed(2);
};
```

# Questão 3 — CSS

## 3a)

```css
h1 {
    background-color: var(--cor-texto);
    color: var(--cor-branco-puro);
    font-weight: bold;
    font-size: 48px;
}
```
## 3b)

```css
header {
    text-align: center;
    margin-bottom: 25px;
}
```
## 3c)

### Código

```css
p,#res-peso {
    color: var(--cor-vermelho-alerta);
    font-size: 14px;
    font-style: italic;
}
```

### Explicação

Esse código aplica estilização:

- Em **todos os elementos `<p>`**
- E também no elemento com id **res-peso**

As alterações realizadas serão:

- Cor do texto ficará vermelha (`crimson`)
- Tamanho da fonte ficará com `14px`
- Texto ficará em **itálico**



## 3d)

### Código

```css
.bloco-resultado {
    background-color: var(--cor-branco-puro);
    border: 1px solid var(--cor-azul-suave);
    border-radius: 6px;
    padding: 20px;
    margin-bottom: 20px;
}
```

### Explicação

Esse código estiliza todos os elementos que possuem a classe:

```html
class="bloco-resultado"
```

Os efeitos serão:

- Fundo branco
- Borda azul clara
- Bordas arredondadas
- Espaçamento interno de `20px`
- Margem inferior de `20px`

Isso melhora a organização visual do conteúdo.



## 3e)

```css
.destaque-frete {
    font-weight: bold;
    background-color: var(--cor-texto);
    color: var(--cor-branco-puro);
}
```



# Questão 4 — Correções da Função `validarFormulario()`

## Problemas Encontrados

### Problema 1 — Variáveis não foram capturadas

O código usa:

```javascript
valor
distancia
carga
```

Mas essas variáveis não foram declaradas.



## Correção

```javascript
let valor = Number(document.getElementById("valor").value);
let distancia = Number(document.getElementById("distancia").value);
let carga = document.getElementById("carga").value;
```

## Problema 2 — Retorno incorreto

O código termina com:
```javascript
return false;
```
Isso impede o formulário de ser enviado mesmo quando está correto.

## Correção

Trocar:
```javascript
return false;
```
por:

```javascript
return true;
```

# Função Corrigida

```javascript
function validarFormulario() {
    let valor = Number(document.getElementById("valor").value);
    let distancia = Number(document.getElementById("distancia").value);
    let carga = document.getElementById("carga").value;
    let mensagensErro = "";
    let formularioValido = true;
    if (isNaN(valor) || valor <= 0) {
        mensagensErro += "- O valor da encomenda deve ser maior que zero.\n";
        formularioValido = false;
    }
    if (isNaN(distancia) || distancia <= 0) {
        mensagensErro += "- A distância deve ser maior que zero.\n";
        formularioValido = false;
    }
    if (carga === "") {
        mensagensErro += "- Selecione uma classificação de carga.\n";
        formularioValido = false;
    }
    if (!formularioValido) {
        alert(mensagensErro);
        return false;
    }
    return true;
}
```
# Explicação Final

As principais correções realizadas foram:

- Capturar corretamente os valores do formulário usando `getElementById`
- Converter números usando `Number()`
- Corrigir o `return false` final para `return true`
- Garantir que o formulário só seja enviado quando todos os dados forem válidos

Essas correções fazem o sistema funcionar corretamente tanto na validação quanto
no envio dos dados para a próxima página.