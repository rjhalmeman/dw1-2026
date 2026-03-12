# Requisitos mínimos

## o Git tem que estar instalado no computador que você vai usar

https://youtu.be/Am46OOLgV4s (tutorial windows)

linux
abra um terminal e digite
``` 
apt install git
``` 






# Tutorial Mínimo: Terminal Linux e Git

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
