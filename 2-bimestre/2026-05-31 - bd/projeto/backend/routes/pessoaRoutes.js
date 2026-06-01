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
