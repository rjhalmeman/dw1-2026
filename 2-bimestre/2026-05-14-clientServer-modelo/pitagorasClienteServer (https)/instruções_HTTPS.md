# Tutorial: Como Resolver Erro de Comunicação HTTPS com Certificado Autoassinado (Localhost)

No servidor

erro ENOENT (Error No Entry) significa exatamente o que a mensagem diz: o Node.js tentou abrir o arquivo key.pem para iniciar o servidor HTTPS, mas não conseguiu encontrá-lo no diretório atual.

executar no terminal, na pasta do projeto para gerar arquivos key.pem, etc

openssl req -nodes -new -x509 -keyout key.pem -out cert.pem

O terminal fará algumas perguntas (como País, Estado, Organização, etc.). Como você está criando isso apenas para testes locais, você pode simplesmente apertar Enter em todas elas para deixar os valores em branco ou com o padrão.

Cliente

## O Problema

Ao atualizar uma aplicação local para utilizar **HTTPS** com um certificado gerado via OpenSSL, o cliente (frontend) tenta enviar dados via `fetch` e falha, exibindo o seguinte erro:

> "Erro na comunicação com o servidor. Verifique se o servidor está rodando em HTTPS e se os certificados foram aceitos."

## Por que isso acontece?

Isso ocorre devido a uma medida de segurança padrão do navegador. O certificado de segurança gerado manualmente (via terminal) é um certificado **autoassinado**. 

Os navegadores da web são programados para confiar apenas em certificados emitidos e validados por Autoridades Certificadoras (CA) reconhecidas globalmente. Como o navegador não reconhece a sua assinatura local como oficial, ele bloqueia as requisições assíncronas (como o `fetch` no JavaScript) por precaução, impedindo a comunicação entre o `cliente.html` e o `server.js`.

---

## A Solução (Passo a Passo)

Para resolver esse problema no ambiente de desenvolvimento local, você precisa registrar uma exceção manual de segurança no seu navegador. 

Siga os passos abaixo:

1. **Acesse o servidor diretamente:** Abra uma nova aba no seu navegador e digite na barra de endereços a URL exata do seu servidor backend (exemplo: `https://localhost:3000` ou `https://127.0.0.1:3000`).
2. **Tela de Aviso de Segurança:** O navegador exibirá um alerta com um cadeado vermelho ou triângulo amarelo informando que *"Sua conexão não é particular"* ou exibirá um *"Aviso de Risco de Segurança"*.
3. **Abra as opções ocultas:** Na tela de aviso, clique no botão **Avançado**.
4. **Aceite o risco:** Clique no link **Ir para localhost (inseguro)** ou **Aceitar o risco e continuar** (o texto exato varia dependendo do navegador, como Chrome, Firefox ou Edge).
5. **Confirme a liberação:** A página irá carregar. É provável que ela mostre uma mensagem de erro padrão do Node.js (como `Cannot GET /`). Isso é perfeitamente normal! O que importa é que o navegador registrou a exceção de segurança para este certificado.
6. **Teste sua aplicação:** Volte para a aba onde o seu arquivo `cliente.html` está aberto, atualize a página (F5) e clique no botão de envio. O `fetch` agora conseguirá se comunicar com o servidor de forma segura.

---

### 💡 Dica para Produção

Esse bloqueio é exclusivo do ambiente de desenvolvimento. Quando você hospedar sua aplicação em um servidor real na internet (em produção), você utilizará um certificado SSL oficial e gratuito (como o do Let's Encrypt) ou comprará um. Dessa forma, o navegador reconhecerá a validade do certificado automaticamente e os seus usuários não verão nenhum aviso de risco.