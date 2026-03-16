# Requisitos mínimos para usar o git e o github

## Checklist

No github
- criou a conta no github
- criou o token
- criou um repositório (pelo menos um repositório)

No celular
 - instalou o google autenticator

No seu computador
 - instalou o git

--- 

Como criar a conta no github
 - acesse www.github.com

## 🔑 Criar Token no GitHub (Senha do Terminal)

O GitHub não aceita mais a senha da sua conta pelo terminal. Você precisa criar um Token para usar como senha na hora de enviar os arquivos.

1. Abra sua conta no [GitHub](https://github.com).
2. No canto superior direito, clique na sua foto de perfil e vá em **Settings** (Configurações).
3. Role o menu lateral esquerdo até o final e clique em **Developer settings**.
4. No menu esquerdo, clique em **Personal access tokens** e escolha **Tokens (classic)**.
5. Clique no botão **Generate new token** e depois em **Generate new token (classic)**.
6. Em **Note**, dê um nome para identificar (ex: "Acesso Terminal").
7. Em **Expiration**, escolha o tempo de validade do seu token. Escolha **"no expiration"**.
8. Em **Select scopes**, marque todas as caixinhas.
9. Desça até o final da página e clique em **Generate token**.
10. **Atenção:** Copie o código gerado agora! Ele é a sua nova senha e não será mostrado novamente.


### ENVIE O TOKEN PARA SEU EMAIL, VAI PRECISAR DELE MUITAS VEZES. DEIXE SALVO EM UM LUGAR SEGURO.
Para acessar o github precisa de autenticação em duas etapas.


Com sua conta logada no github
 - procure Repositories e o botão New
   - dê um nome para o novo repositório e confirme
  



# Instale no seu celular o Google Autenticator

## o Git tem que estar instalado no computador que você vai usar

https://youtu.be/Am46OOLgV4s (tutorial windows)

linux
abra um terminal e digite
``` 
apt install git
``` 



# Tutorial mínimo para uso do git/github.

Considerei que o repositório já existe no github (nuvem)


## Navegar nas Pastas

- **Listar arquivos e pastas no diretório atual:**
  ```bash
  ls
  ```

- **Entrar em uma pasta:**
  ```bash
  cd nome-da-pasta
  ```

- **Voltar para a pasta anterior:**
  ```bash
  cd ..
  ```

## Clonar um Repositório

Baixe o projeto do GitHub para o seu computador:
```bash

git clone https://github.com/usuario/nome-do-repositorio.git

```
Exemplo: https://github.com/rjhalmeman/algoritmos.git

*(Lembre-se de usar `cd nome-do-repositorio` para entrar na pasta após clonar).*

## Fluxo Básico do Git

Após alterar ou criar arquivos no seu projeto, siga esta sequência:

**1. Adicionar as mudanças:**
Prepara todos os arquivos modificados para o próximo salvamento.
```bash
git add .
```

**2. Criar o commit:**
Salva as alterações localmente com uma mensagem descritiva.
```bash
git commit -m "Sua mensagem de commit aqui"
```

nos computadores da utfpr, se fizer commit e aparecer essas mensagens

``` 

git config --global user.email "you@example.com"
git config --global user.name "Your Name"

``` 

deve-se copiar a mensagem, colar no prompt e preencher com suas credenciais (no mínimo fazer com o email).

**3. Enviar para o GitHub:**
Envia os commits do seu computador para o repositório online.
```bash
git push
```

Extras

https://www.youtube.com/watch?v=fkETk6hsUvU
