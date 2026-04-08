# 📂 Guia Prático: Organizando Repositórios no GitHub

---

## 🚀 Antes de Começar os Exercícios

Siga este procedimento toda vez que for iniciar seus estudos no computador:

1. Abra o **terminal** na pasta raiz onde você guarda seus projetos (exemplo: pasta `Documentos`).
2. Analise a sua situação atual e escolha uma das opções abaixo:

### Cenário A: A pasta do repositório já existe no seu computador
1. No terminal, acesse a pasta do seu repositório.
2. Atualize seus arquivos locais (buscando possíveis novidades do GitHub) digitando o comando:
   ```bash
   git pull
   ```
3. Abra a pasta no VS Code digitando:
   ```bash
   code .
   ```

### Cenário B: A pasta do repositório NÃO existe no seu computador
1. Clone o repositório do GitHub digitando o comando:
   ```bash
   git clone https://github.com/SeuUsuario/SeuRepositorio
   ```
2. No terminal, acesse a nova pasta que foi criada.
3. Abra a pasta no VS Code digitando:
   ```bash
   code .
   ```

---

## 📁 Como Reorganizar Seus Repositórios

Se você precisa arrumar os arquivos e pastas que já existem, siga este passo a passo:

1. Acesse o site do **GitHub** e faça login com seu usuário.
2. **Renomeie o repositório** diretamente no site, caso seja necessário (exemplo: `dw1-exercicios`).
3. No seu computador, abra o **terminal** na pasta onde deseja baixar os arquivos.
4. Clone o repositório usando o comando:
   ```bash
   git clone https://github.com/SeuUsuario/SeuRepositorio
   ```
   *(Isso criará uma pasta no seu computador com o mesmo nome do repositório).*
5. Feche o terminal.
6. Abra o seu **Gerenciador de Arquivos** (Windows Explorer, Finder, etc.) e entre na pasta do repositório que acabou de ser criada.
7. **Organize seus exercícios:** Crie subpastas para cada um deles. Para manter as boas práticas, **cada exercício deve ter 3 arquivos separados**: um `.html`, um `.css` e um `.js`.
8. Quando terminar de organizar tudo, você precisa **subir essas alterações** para o GitHub. Abra o terminal *dentro da pasta do repositório* e execute os comandos abaixo, um por um:
   
   *Adiciona todas as modificações:*
   ```bash
   git add .
   ```
   
   *Salva as alterações com uma mensagem explicativa:*
   ```bash
   git commit -m "Organizando pastas e arquivos dos exercícios"
   ```
   
   *Envia as alterações para o servidor (pode pedir seu usuário e Token de acesso):*
   ```bash
   git push
   ```

9. Volte na página do seu repositório no site do GitHub, atualize a página (F5) e confira se tudo ficou organizado corretamente!