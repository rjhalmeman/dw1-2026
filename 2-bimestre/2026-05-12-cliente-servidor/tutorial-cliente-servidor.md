# 📋 Tutorial Simples de Cliente/Servidor com HTML, JavaScript e Node.js

## 🎯 Objetivo

Neste tutorial, vamos entender de forma simples como funciona a comunicação entre **cliente** e **servidor** utilizando:

- **HTML**
- **JavaScript**
- **Node.js**
- **Express**

O exemplo funciona como uma conversa:

- O **cliente** envia uma mensagem.
- O **servidor** recebe.
- O **servidor** processa a mensagem.
- O **servidor** devolve uma resposta.

---

# 🧠 O que é Cliente e Servidor?

## 🖥️ Cliente

O **cliente** é quem faz a requisição.

Exemplos:

- navegador
- celular
- aplicativo

No nosso projeto, o cliente será a página HTML.

---

## 🖧 Servidor

O **servidor** é quem recebe pedidos e responde.

Ele pode:

- salvar dados
- consultar banco
- processar informações
- devolver respostas

No nosso projeto, o servidor será um programa Node.js usando Express.

---

# 🔄 Funcionamento da Comunicação

## Fluxo da comunicação

```text
Cliente (HTML)
       ↓
Envia mensagem usando fetch()
       ↓
Servidor Node.js recebe
       ↓
Servidor processa
       ↓
Servidor responde
       ↓
Cliente mostra resposta
```

---

# 📁 Arquivos do Projeto

## Arquivo do Cliente

```text
index.html
```

Responsável pela interface.

---

## Arquivo do Servidor

```text
server.js
```

Responsável por receber e responder mensagens.

---

# 🖥️ Parte do Cliente (HTML)

## Estrutura da página

O cliente possui:

- campo para endereço do servidor
- campo para porta
- campo para mensagem
- botão enviar

---

# 🧾 Código principal do Cliente

```html
<input type="text" id="inputMensagem">
<button onclick="enviarMensagem()">Enviar</button>
```

Quando o botão é clicado, a função `enviarMensagem()` é executada.

---

# 🚀 Enviando dados para o servidor

## Função fetch()

O cliente usa:

```javascript
fetch()
```

para conversar com o servidor.

---

## Código principal

```javascript
const response = await fetch(`http://${enderecoServidor}:${porta}/enviar-mensagem`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ mensagem })
});
```

---

# 🔍 Explicando cada parte

## method: 'POST'

Define que estamos enviando dados.

---

## headers

Informa o formato dos dados.

```javascript
'Content-Type': 'application/json'
```

---

## JSON.stringify()

Transforma objeto JavaScript em JSON.

Exemplo:

```javascript
{ mensagem: "Olá" }
```

vira:

```json
{
  "mensagem": "Olá"
}
```

---

# 📦 O que é JSON?

## JSON significa:

```text
JavaScript Object Notation
```

É um formato muito usado para troca de dados entre cliente e servidor.

---

# 🖧 Parte do Servidor

## Importando bibliotecas

```javascript
const express = require('express');
const os = require('os');
```

---

# ⚙️ Criando o servidor

```javascript
const app = express();
const port = 3000;
```

---

# 🧩 Middleware

## O que é middleware?

São funções executadas antes da rota principal.

---

## Middleware JSON

```javascript
app.use(express.json());
```

Permite que o servidor entenda JSON enviado pelo cliente.

---

# 🌍 CORS

## Problema

O navegador bloqueia comunicações entre portas diferentes.

---

## Solução

Usar CORS.

```javascript
res.header('Access-Control-Allow-Origin', '*');
```

Isso libera acesso para qualquer origem.

---

# 📬 Rota do servidor

## Rota POST

```javascript
app.post('/enviar-mensagem', (req, res) => {
```

Significa:

- se alguém enviar um POST para `/enviar-mensagem`
- execute esta função

---

# 📥 Recebendo dados

```javascript
let mensagem = req.body.mensagem;
```

O servidor pega a mensagem enviada pelo cliente.

---

# 🔠 Processando dados

```javascript
mensagem = mensagem.toUpperCase();
```

Transforma o texto em maiúsculo.

---

# 📤 Respondendo ao cliente

```javascript
res.send(resposta);
```

O servidor envia uma resposta.

---

# 🖥️ Exibindo resposta no cliente

## Código

```javascript
document.getElementById("respostaDoServidor").innerHTML = data;
```

Mostra a resposta recebida.

---

# 🌐 Descobrindo o IP da máquina

O servidor possui uma função:

```javascript
function obterIP()
```

Ela procura o IP da máquina na rede.

---

# 📡 Exemplo de IP

```text
192.168.0.15
```

Assim outros computadores da rede podem acessar o servidor.

---

# ▶️ Iniciando o servidor

```javascript
app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://${ip}:${port}`)
})
```

---

# 🔎 Explicação

## app.listen()

Faz o servidor começar a funcionar.

---

## 0.0.0.0

Permite acesso externo.

---

# 🧪 Exemplo de Funcionamento

## Cliente envia:

```text
Olá servidor
```

---

## Servidor recebe:

```text
Olá servidor
```

---

## Servidor transforma:

```text
OLÁ SERVIDOR
```

---

## Servidor responde:

```text
Eu sou o servidor, você mandou a mensagem "OLÁ SERVIDOR"
```

---

# 📚 Conceitos Aprendidos

## Cliente

Quem faz pedidos.

---

## Servidor

Quem responde pedidos.

---

## HTTP

Protocolo de comunicação.

---

## JSON

Formato de troca de dados.

---

## POST

Método para envio de dados.

---

## CORS

Liberação de acesso entre origens diferentes.

---

## API

Conjunto de rotas e funcionalidades do servidor.

---

# 🧠 Resumo Final

Neste projeto:

- o **cliente** envia uma mensagem
- o **servidor** recebe
- o **servidor** processa
- o **servidor** devolve uma resposta
- o **cliente** mostra o resultado

Esse modelo é utilizado em praticamente todos os sistemas modernos:

- redes sociais
- bancos
- lojas online
- aplicativos
- jogos online

---

# 🚀 Próximos Passos

Depois desse exemplo, é possível aprender:

- banco de dados
- login
- cadastro
- autenticação
- cookies
- sessões
- APIs REST
- React
- PostgreSQL

---

# 📌 Conclusão

O modelo **cliente/servidor** é a base do desenvolvimento web moderno.

Entender esse funcionamento ajuda a compreender como:

- sites
- aplicativos
- sistemas online

trocam informações pela internet.

Com poucos arquivos e pouco código já foi possível criar uma comunicação real entre cliente e servidor.