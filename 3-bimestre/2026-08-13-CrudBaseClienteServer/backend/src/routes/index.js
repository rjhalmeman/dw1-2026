const express = require('express');
const router = express.Router();
const produtoRoutes = require('./produtoRoutes');
const ProdutoController = require('../controllers/ProdutoController');

// Registra as rotas de produtos
router.use('/produtos', produtoRoutes);

// Rota de mensagens
router.post('/mensagens', async (req, res) => {
    const { mensagem } = req.body;
    if (!mensagem) {
        return res.status(400).json({ status: "erro", mensagem: "Bilhete vazio!" });
    }

    if (mensagem === "vovó") {
        return res.status(200).json({ status: "sucesso", mensagem: "Oi, em que posso ajudar?" });
    } else if (mensagem === "chegou") {
        return res.status(200).json({ status: "sucesso", mensagem: "a Chapeuzinho chegou aqui com o bilhete" });
    } else if (mensagem === "situacao") {
        return ProdutoController.verificarSituacao(req, res);
    } else {
        return res.status(200).json({ status: "sucesso", mensagem: "mensagem não entendida" });
    }
});

// ATENÇÃO AQUI: deve ser exportado diretamente!
module.exports = router;