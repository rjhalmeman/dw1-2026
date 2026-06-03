# Chapeuzinho Vermelho e a Arquitetura Cliente-Servidor

## Introdução

Era uma vez uma menina muito rápida chamada **Internetina do Chapeuzinho Vermelho**.

Ela morava com sua mãe, **Maria Clientina da Silva**, uma famosa fabricante de quitutes da região.

Do outro lado da floresta morava sua avó, **Servidorina da Lojinha**, responsável por administrar o estoque e registrar tudo em sua enorme dispensa chamada **Dispensa Básica (DB)**.

A **Dispensa Básica (DB)** era organizada como ninguém jamais tinha visto. Lá estavam registrados em uma tabela chamada `produtos`, os bolos, doces, balas e pães da lojinha. Na tabela havia 6 colunas: o `id_produto`, o `nome_produto`, a `quantidade_produto`, a `quantidade_minima_produto`, a `quantidade_maxima_produto` e a `quantidade_solicitada`.

Internetina tinha uma missão muito importante: transportar bilhetes entre a mãe e a avó.

Ela nunca abria os bilhetes. Apenas entregava. Afinal, **mensageiros não tomam decisões**. Eles apenas transportam mensagens.

Mas havia um problema.

Na floresta vivia o terrível **Lobo Hacker Mau**, que adorava interceptar mensagens, modificar bilhetes e causar confusão.

Por isso, a mãe e a avó sempre tomavam muito cuidado com a **segurança das mensagens**.

---

# Conhecendo os Personagens

| Personagem | Representa |
|------------|------------|
| **Maria Clientina da Silva** | Cliente (Frontend) |
| **Internetina do Chapeuzinho Vermelho** | Internet |
| **Servidorina da Lojinha** | Servidor (Backend) |
| **Dispensa Básica (DB)** | Banco de Dados |
| **Lobo Hacker Mau** | Ameaças de Segurança |
| **Bilhetes** | Mensagens JSON |
| **Verificação de origem** | CORS |
| **Envelope Mágico** | HTTPS (Criptografia) |

---

# O Pedido de Informação (Funcionamento do Sistema)

Certa manhã, Maria Clientina queria saber como estava o estoque da lojinha.

Ela escreveu um bilhete formatado como um **JSON**:

```json
{
    "mensagem": "situacaoEstoque"
}
```

E entregou para Internetina.

— Leve este pedido para sua avó!

Internetina correu pela floresta e chegou à casa da vovó.

Servidorina recebeu o bilhete e realizou algumas **verificações de segurança**.

Primeiro verificou:

— Este bilhete veio realmente da Clientina? Essa verificação era chamada de **CORS**, uma forma elegante de dizer: *"Só aceito mensagens de remetentes autorizados"*.

Depois verificou:

— O Lobo Hacker Mau alterou alguma coisa durante o caminho? Ela sabia que não, pois o bilhete viajou dentro de um envelope mágico chamado **HTTPS**, que criptografa a mensagem e garante que ela não seja lida ou modificada por invasores na floresta.

Como tudo estava correto e validado, ela pôde processar o pedido.

---

# Consultando o Banco de Dados

Servidorina foi até a sua **Dispensa Básica (DB)**, informou as **credenciais de acesso** e abriu a porta.

Após consultar os registros, encontrou a seguinte situação:

| id_produto | nome_produto | quantidade_produto | quantidade_minima_produto | quantidade_maxima_produto | quantidade_solicitada |
|------------|--------------|--------------------|---------------------------|---------------------------|----------------------|
| 1 | Bolo | 2 | 3 | 10 | 8 |
| 2 | Doce | 3 | 5 | 10 | 7 |
| 3 | Bala | 7 | 10 | 15 | 8 |
| 4 | Pão | 18 | 20 | 50 | 32 |

Ela então aplicou as **Regras de Negócio** da lojinha para preencher as informações.

### Regras de Negócio

Para cada produto cadastrado na tabela:

- Se a **quantidade_produto** for menor que a **quantidade_minima_produto**, o produto deve ser reposto.
- A quantidade a ser solicitada é calculada pela fórmula:

`quantidade_maxima_produto - quantidade_produto`

Com os cálculos já processados em sua tabela, Servidorina escreveu outro bilhete de **resposta**:

```json
{
    "bolos": 8,
    "doces": 7,
    "balas": 8,
    "paes": 32
}
```

Dessa forma, a decisão não está escrita rigidamente no programa do Cliente. As informações são obtidas do **Banco de Dados** e as regras de negócio são **aplicadas dinamicamente pelo Servidor**.

E entregou para Internetina.

---

# A Resposta da avó Servidorina

Internetina voltou correndo pela floresta.

No caminho ela ouviu um uivo.

*Auuuuuuuuuuuu!*

Era o Lobo Hacker Mau.

— Deixe-me ver esse bilhete!

— Nem pensar! — respondeu Internetina.

— Mas eu só quero dar uma olhadinha...

— Você não está **autorizado**!

— E se eu mudar só um número?

— O meu protocolo **HTTPS** vai invalidar a mensagem e a vovó vai rejeitar a conexão!

E Internetina continuou correndo sem parar.

Ao chegar em casa, entregou o bilhete para Maria Clientina.

A mãe leu a resposta (**Frontend recebendo os dados do Backend**).

— Ah, então é isso que a vovó precisa!

Ela imediatamente começou a fabricar os produtos.

---

# Preparando a Resposta

Enquanto preparava tudo, Maria Clientina escreveu outro bilhete (**Nova Requisição**):

```json
{
    "mensagem": "vouPrepararEEnviar"
}
```

E entregou para Internetina.

Internetina atravessou novamente a floresta e entregou a mensagem para Servidorina.

A vovó leu o bilhete e respondeu com um **Status Code**:

```json
{
    "status": "sucesso",
    "mensagem": "pedidoRecebido"
}
```

Ao receber essa resposta, Maria Clientina ficou tranquila. Ela sabia que a comunicação havia funcionado corretamente.

---

# Situação inusitada

Alguns dias depois, o Lobo Hacker Mau tentou entrar diretamente na Dispensa Básica.

Ao chegar à porta, Servidorina perguntou:

— Quem é você?

— Sou o usuário final.

— E o que deseja?

— Quero acessar diretamente o **Banco de Dados**.

Servidorina arregalou os olhos.

— O QUÊ?!

— Quero consultar a tabela de bolos.

— E passou pelo **Cliente**?

— Não.

— Enviou uma **Requisição**?

— Não.

— Recebeu **Autorização**?

— Não.

— Então está tudo errado!

— Mas por quê?

Servidorina respondeu cruzando os braços:

— Porque aqui seguimos uma **Arquitetura Cliente-Servidor**!
- O **Cliente** faz a requisição.
- O **Servidor** processa.
- O **Banco de Dados** armazena as informações.
- **Ninguém entra diretamente no banco de dados.**

O Lobo abaixou as orelhas.

— Então vou precisar falar com a Clientina primeiro?

— Exatamente.

— E enviar um JSON?

— Exatamente.

— E esperar a resposta?

— Exatamente.

— Que burocracia...

— Nós chamamos isso de **Segurança**.

---

# Fazendo a Relação com a Tecnologia

Na história, os personagens representam os componentes reais de uma aplicação web.

### Cliente (Frontend)

A **Maria Clientina** representa o sistema que o usuário utiliza (a interface visual).

Exemplos:
- HTML
- CSS
- JavaScript
- React
- Vue

Ela é responsável por criar os pedidos.

---

### Internet

A **Internetina** representa a **rede** que transporta as mensagens (Protocolo HTTP/TCP).

Ela não toma decisões. Ela apenas entrega as **requisições (Requests)** e as **respostas (Responses)**.

---

### JSON

Os bilhetes representam mensagens no formato **JSON (JavaScript Object Notation)**, o padrão universal para troca de dados.

Exemplo:

```json
{
    "mensagem": "situacaoEstoque"
}

