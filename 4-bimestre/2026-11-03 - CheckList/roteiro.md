Para fazer o projeto do 4º bimestre:

1) Decidiu o tema? Sem um tema bem definido, não há como avançar. Essa atividade é essencial.

2) Fez o wireframe? Ou seja, desenhou as telas e planejou como seu sistema deverá ficar no futuro?

3) Pensou na dinâmica do sistema? Escreveu as regras? Apresentou e conversou com o professor sobre isso?

4) Estudou o código de exemplo (candyshop)?

5) Criou o banco de dados? Criou o script do banco de dados (DDL)? Executou o script? Funcionou?
   
6) Populou o banco de dados, para facilitar os testes?

7) Criou a estrutura de pastas para seu projeto (parecida com a estrutura do candyshop)?

8) Criou, no backend, o server.js, o .env, etc.? Testou se o acesso ao banco de dados funciona?

9)  Fez o dashboard (menu principal)? Comece por esse frontend. Visão de cliente e não precisa de login para acessar.

10) Coloque um link no dashboard (menu principal) para fazer o login. Ao clicar, deve abrir a tela de login.

11) Faça o frontend do login (HTML, CSS e JS).

12) Chame o backend para validar usuário e senha.

13) Se validar (usuário e senha existem no BD), armazene as credenciais via um token/sessão. Até esse ponto, deixe um usuário cadastrado no banco de dados.

14) Teste se é cliente ou funcionário ao fazer login. Se for só cliente, abra direto o dashboard cliente. Se for só funcionário, abra o dashboard do Administrador. Se for cliente e funcionário, abra uma janela perguntando como quer fazer login.

15) No dashboard de cliente, deve ser possível procurar e escolher produtos, etc. (adicionar ao carrinho). Após colocar no carrinho, faça a tela para fechar o pedido (já escolheu e confere se está tudo certo). Nessa tela, deve haver um botão para PAGAMENTO. Ao clicar nesse botão, verifique se está logado. Se não estiver, vá para a tela de login. Se estiver, escolha a forma de pagamento.