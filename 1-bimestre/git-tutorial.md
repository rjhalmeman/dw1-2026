# Requisitos mínimos

Para acessar o github precisa de autenticação em duas etapas.

Instale no seu celular o Google Autenticator

![alt text](image.png)


## 🔑 Criar Token no GitHub (Senha do Terminal)

O GitHub não aceita mais a senha da sua conta pelo terminal. Você precisa criar um Token para usar como senha na hora de enviar os arquivos.

1. Abra sua conta no [GitHub](https://github.com).
2. No canto superior direito, clique na sua foto de perfil e vá em **Settings** (Configurações).
3. Role o menu lateral esquerdo até o final e clique em **Developer settings**.
4. No menu esquerdo, clique em **Personal access tokens** e escolha **Tokens (classic)**.
5. Clique no botão **Generate new token** e depois em **Generate new token (classic)**.
6. Em **Note**, dê um nome para identificar (ex: "Acesso Terminal").
7. Em **Expiration**, escolha o tempo de validade do seu token.
8. Em **Select scopes**, marque a caixinha **`repo`** (isso dá permissão para enviar e modificar os arquivos do repositório).
9. Desça até o final da página e clique em **Generate token**.
10. **Atenção:** Copie o código gerado agora! Ele é a sua nova senha e não será mostrado novamente.


# ENVIE O TOKEN PARA SEU EMAIL, VAI PRECISAR DELE MUITAS VEZES. DEIXE SALVO EM UM LUGAR SEGURO.


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
git clone [https://github.com/usuario/nome-do-repositorio.git](https://github.com/usuario/nome-do-repositorio.git)
```
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

**3. Enviar para o GitHub:**
Envia os commits do seu computador para o repositório online.
```bash
git push
```

Extras

https://www.youtube.com/watch?v=fkETk6hsUvU
