#!/bin/bash

# Criar estrutura de pastas
mkdir -p projeto/backend/controllers
mkdir -p projeto/backend/routes
mkdir -p projeto/backend/database
mkdir -p projeto/frontend

# Criar arquivo pessoaController.js com o caminho relativo
cat > projeto/backend/controllers/pessoaController.js << 'EOF'
// Caminho relativo: //projeto/backend/controllers/pessoaController.js

const pool = require('../database/conexao');

const pessoaController = {
    // Listar todas as pessoas
    async listar(req, res) {
        try {
            const result = await pool.query('SELECT * FROM pessoas');
            res.json(result.rows);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Buscar pessoa por ID
    async buscarPorId(req, res) {
        const { id } = req.params;
        try {
            const result = await pool.query('SELECT * FROM pessoas WHERE id = $1', [id]);
            if (result.rows.length === 0) {
                return res.status(404).json({ error: 'Pessoa não encontrada' });
            }
            res.json(result.rows[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Criar nova pessoa
    async criar(req, res) {
        const { nome, email, idade } = req.body;
        try {
            const result = await pool.query(
                'INSERT INTO pessoas (nome, email, idade) VALUES ($1, $2, $3) RETURNING *',
                [nome, email, idade]
            );
            res.status(201).json(result.rows[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Atualizar pessoa
    async atualizar(req, res) {
        const { id } = req.params;
        const { nome, email, idade } = req.body;
        try {
            const result = await pool.query(
                'UPDATE pessoas SET nome = $1, email = $2, idade = $3 WHERE id = $4 RETURNING *',
                [nome, email, idade, id]
            );
            if (result.rows.length === 0) {
                return res.status(404).json({ error: 'Pessoa não encontrada' });
            }
            res.json(result.rows[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Deletar pessoa
    async deletar(req, res) {
        const { id } = req.params;
        try {
            const result = await pool.query('DELETE FROM pessoas WHERE id = $1 RETURNING *', [id]);
            if (result.rows.length === 0) {
                return res.status(404).json({ error: 'Pessoa não encontrada' });
            }
            res.json({ message: 'Pessoa deletada com sucesso' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = pessoaController;
EOF

# Criar arquivo pessoaRoutes.js com o caminho relativo
cat > projeto/backend/routes/pessoaRoutes.js << 'EOF'
// Caminho relativo: //projeto/backend/routes/pessoaRoutes.js

const express = require('express');
const router = express.Router();
const pessoaController = require('../controllers/pessoaController');

// Rotas para pessoas
router.get('/pessoas', pessoaController.listar);
router.get('/pessoas/:id', pessoaController.buscarPorId);
router.post('/pessoas', pessoaController.criar);
router.put('/pessoas/:id', pessoaController.atualizar);
router.delete('/pessoas/:id', pessoaController.deletar);

module.exports = router;
EOF

# Criar arquivo conexao.js com o caminho relativo
cat > projeto/backend/database/conexao.js << 'EOF'
// Caminho relativo: //projeto/backend/database/conexao.js

const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 5432,
});

module.exports = pool;
EOF

# Criar arquivo .env
cat > projeto/backend/.env << 'EOF'
# Caminho relativo: //projeto/backend/.env

DB_HOST=localhost
DB_PORT=5432
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=seu_banco
PORT=3000
EOF

# Criar arquivo package.json
cat > projeto/backend/package.json << 'EOF'
{
  "name": "backend",
  "version": "1.0.0",
  "description": "Backend do projeto",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "pg": "^8.11.3",
    "dotenv": "^16.3.1",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
EOF

# Criar arquivo server.js com o caminho relativo
cat > projeto/backend/server.js << 'EOF'
// Caminho relativo: //projeto/backend/server.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pessoaRoutes = require('./routes/pessoaRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/api', pessoaRoutes);

// Rota de teste
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Servidor está rodando!' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`API disponível em http://localhost:${PORT}/api`);
});
EOF

# Criar arquivo README.md (opcional)
cat > projeto/README.md << 'EOF'
# Projeto

## Estrutura do Projeto
