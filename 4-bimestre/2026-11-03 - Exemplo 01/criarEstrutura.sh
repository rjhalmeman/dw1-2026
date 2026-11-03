#!/bin/bash

Nome da pasta raiz do projeto

PROJECT_NAME="loja-camisetas"

echo "Criando estrutura do projeto: $PROJECT_NAME..."

Criar pasta raiz

mkdir -p $PROJECT_NAME
cd $PROJECT_NAME

--- BACKEND ---

echo "Criando pastas do backend..."
mkdir -p backend/controllers
mkdir -p backend/middlewares
mkdir -p backend/routes

echo "Criando arquivos vazios do backend..."
touch backend/server.js
touch backend/database.js
touch backend/controllers/loginController.js
touch backend/middlewares/authMiddleware.js
touch backend/routes/loginRoutes.js

--- FRONTEND ---

echo "Criando pastas do frontend..."
mkdir -p frontend/login
mkdir -p frontend/assets/img # Pasta para as imagens das camisetas

echo "Criando arquivos vazios do frontend..."

Arquivos do login

touch frontend/login/login.html
touch frontend/login/login.css
touch frontend/login/login.js

Arquivos do menu principal (Loja)

touch frontend/index.html
touch frontend/style.css
touch frontend/main.js

echo "✅ Estrutura criada com sucesso na pasta '$PROJECT_NAME'!"
echo "Para começar, acesse a pasta:"
echo "cd $PROJECT_NAME"
