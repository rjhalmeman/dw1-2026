#!/bin/bash

echo "Criando estrutura Node.js + Vanilla JS/HTML/CSS + Postgres..."

# 1. Diretórios do Backend
mkdir -p backend/src/config
mkdir -p backend/src/controllers
mkdir -p backend/src/models
mkdir -p backend/src/routes
mkdir -p backend/src/utils

# 2. Diretórios do Frontend
mkdir -p frontend/css
mkdir -p frontend/js
mkdir -p frontend/pages
mkdir -p frontend/assets/img

# 3. Diretório de Banco de Dados
mkdir -p database

# 4. Arquivos do Backend
touch backend/src/config/database.js
touch backend/src/controllers/ProdutoController.js
touch backend/src/models/ProdutoModel.js
touch backend/src/routes/produtoRoutes.js
touch backend/src/routes/index.js
touch backend/src/utils/validators.js
touch backend/app.js
touch backend/server.js

# 5. Arquivos do Frontend
touch frontend/index.html
touch frontend/pages/produtos.html
touch frontend/css/global.css
touch frontend/css/menu.css
touch frontend/css/crud.css
touch frontend/js/api.js
touch frontend/js/menu.js
touch frontend/js/crudProdutos.js

# 6. Arquivos do PostgreSQL
touch database/schema.sql
touch database/seed.sql

# 7. Arquivos Globais
touch .env
touch .env.example
touch .gitignore
touch README.md

# Criando package.json base no backend
cat <<EOT > backend/package.json
{
  "name": "backend-crud-produtos",
  "version": "1.0.0",
  "description": "API Node.js para CRUD de Produtos com PostgreSQL",
  "main": "server.js",
  "type": "commonjs",
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "pg": "^8.11.5"
  }
}
EOT

# Preenchendo o .env.example
cat <<EOT > .env.example
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
PORT=3000
EOT

# Preenchendo o .gitignore
cat <<EOT > .gitignore
node_modules/
.env
.DS_Store
EOT

echo "✅ Estrutura criada com sucesso!"
echo "👉 Próximo passo: entre na pasta 'backend' e rode 'npm install' para baixar as dependências."
