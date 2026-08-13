const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./src/routes');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Servir arquivos estáticos do Frontend (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '../frontend')));

// Rotas genéricas da API
app.use('/api', routes);

module.exports = app;