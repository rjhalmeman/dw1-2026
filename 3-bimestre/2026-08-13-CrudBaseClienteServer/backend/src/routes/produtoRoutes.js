const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/ProdutoController');

router.get('/', ProdutoController.listarTodos);
router.get('/situacao', ProdutoController.verificarSituacao);
router.get('/:id', ProdutoController.buscarPorId);
router.post('/', ProdutoController.criar);
router.put('/:id', ProdutoController.atualizar);
router.delete('/:id', ProdutoController.deletar);

// ATENÇÃO AQUI: deve ser exportado diretamente!
module.exports = router;