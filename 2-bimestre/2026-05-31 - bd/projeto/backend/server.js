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
