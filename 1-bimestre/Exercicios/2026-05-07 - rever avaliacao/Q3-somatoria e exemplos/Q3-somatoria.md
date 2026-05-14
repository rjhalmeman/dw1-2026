3) Analise o código HTML + CSS e some as afirmações que estiverem corretas:

```css 
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vibe Teen - Gamer</title>
    <style>
        :root {
            --cor: blue;
            --cor2: red;
            --w: 800px;
            --h: 150px;
            --bg-body: black;
            --bg-container: white;
            --border-container: yellow --shadow-container: orange;
            --font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        .container {
            display: flex;
            align-content: center;
            justify-content: center;
            color: var(--cor);
            align-items: center;
            background-color: var(--bg-container);
            font-family: var(--font-family);
            text-transform: uppercase;
            flex-direction: column;
        }

        .container p {
            color: var(--cor2);
            text-align: center;
        }

        div {
            width: var(--w);
            height: var(--h);
        }

        body {
            background-color: var(--bg-body);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>UTFPR - 2026</h1>
        <p>Curso Técnico Integrado em Informática para Internet</p>
    </div>
</body>

</html>

``` 

# Análise das Afirmações (Válida para ambas as provas)

- O fundo da página será preto: VERDADEIRO
  
  A tag body recebe background-color: var(--bg-body); e, no :root, a variável --bg-body é definida como black.

- O .container terá fundo amarelo: FALSO

  A classe .container tem background-color: var(--bg-container);. O valor de --bg-container no :root é white (branco).

- O texto do ```<h1>``` será azul: VERDADEIRO

  O .container tem a cor do texto definida como color: var(--cor); (azul). Como não há uma cor específica para o ```<h1>```, ele herda a cor do elemento pai.

- O texto do ```<p>``` será vermelho: VERDADEIRO

  Existe um seletor específico .container p com a propriedade color: var(--cor2);, que está definida como red (vermelho).

- O conteúdo dentro do .container está centralizado horizontalmente (justify-content): FALSO

  Como o .container possui flex-direction: column;, o eixo principal passa a ser o vertical e o eixo cruzado passa a ser o horizontal. Portanto, o justify-content: center está centralizando os itens verticalmente, e quem está centralizando horizontalmente é o align-items: center.

  O conteúdo dentro do .container está centralizado verticalmente (align-content): FALSO
  Pelo mesmo motivo acima, a centralização vertical aqui é feita pelo justify-content. Além disso, a propriedade align-content só tem efeito quando há quebra de linha (flex-wrap: wrap) e múltiplas linhas no flex container, o que não é o caso.

- O layout do .container está em linha (row): FALSO

  No código CSS do .container consta explicitamente flex-direction: column;.

- A largura da div será 800px: VERDADEIRO

  A tag div recebe width: var(--w);, e --w equivale a 800px.

 - A altura da div será 150px: VERDADEIRO

   A tag div recebe height: var(--h);, e --h equivale a 150px.

## Resposta: Prova A
Somando os valores das alternativas corretas:

1)   O fundo da página será preto

2)   O texto do ```<h1>``` será azul

3)   O texto do ```<p>``` será vermelho

4)   A largura da div será 800px

5)   A altura da div será 150px

Cálculo: 1 + 4 + 8 + 128 + 256 = 397

# Prova A: **397**

## Resposta: Prova B

Somando os valores das alternativas corretas:

004) O texto do ```<p>``` será vermelho

008) O texto do ```<h1>``` será azul

064) O fundo da página será preto

128) A largura da div será 800px

256) A altura da div será 150px

Cálculo: 4 + 8 + 64 + 128 + 256 = 460

Resposta Prova B: **460**
