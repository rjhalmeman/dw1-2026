# 🧮 Exercício: Cálculo de IMC com Classificação

## 📌 Objetivo

Desenvolver uma aplicação web simples que calcule o **IMC (Índice de Massa Corporal)** de um usuário e exiba sua classificação de acordo com a tabela padrão.

---

## 📋 Requisitos Funcionais

A aplicação deve:

* Receber os seguintes dados do usuário:

  * Peso (em kg)
  * Altura (em metros)

* Calcular o IMC utilizando a fórmula:

  ```
  IMC = peso / (altura * altura)
  ```

* Exibir o resultado do IMC na tela

* Informar a **classificação correspondente**, conforme a tabela abaixo:

---

## 📊 Tabela de Classificação do IMC

| IMC            | Classificação      |
| -------------- | ------------------ |
| Menor que 18.5 | Abaixo do peso     |
| 18.5 até 24.9  | Peso normal        |
| 25.0 até 29.9  | Sobrepeso          |
| 30.0 até 34.9  | Obesidade grau I   |
| 35.0 até 39.9  | Obesidade grau II  |
| 40.0 ou mais   | Obesidade grau III |

---

## 🎨 Requisitos de Interface

* Utilizar **HTML com tags semânticas**, como:

  * `<header>`, `<main>`, `<section>`, `<footer>`, etc.

* Aplicar **CSS com cores suaves** (tons claros e agradáveis)

* Criar um layout simples e organizado

---

## ⚠️ Tratamento de Erros

* Validar os dados informados pelo usuário
* Caso haja erro (campos vazios, valores inválidos, etc):

  * Exibir uma mensagem de aviso
  * O aviso deve ter:

    * **Fundo vermelho**
    * **Texto branco**
    * **Fonte em negrito**

---

## 🗂️ Organização do Projeto

O código deve ser separado em **três arquivos**:

```
/exercicio-imc
│
├── index.html
├── style.css
└── script.js
```

---

## 📦 Entrega

* Subir o projeto para o GitHub contendo:

  * Todos os arquivos (HTML, CSS e JavaScript)
  * Código organizado e comentado (quando necessário)

---

## ⭐ Desafio Extra (Opcional)

* Destacar visualmente a classificação do usuário
* Exibir a tabela de IMC na própria página
* Tornar o layout responsivo (funcionar bem em celular)
