const ProdutoModel = require('../models/ProdutoModel');

class ProdutoController {
    static async listarTodos(req, res) {
        try {
            const produtos = await ProdutoModel.buscarTodos();
            return res.status(200).json({ status: "sucesso", dados: produtos });
        } catch (error) {
            console.error('Erro ao listar produtos:', error);
            return res.status(500).json({ status: "erro", mensagem: 'Erro ao buscar produtos' });
        }
    }

    static async buscarPorId(req, res) {
        try {
            const { id } = req.params;
            const produto = await ProdutoModel.buscarPorId(id);
            if (!produto) {
                return res.status(404).json({ status: "erro", mensagem: 'Produto não encontrado' });
            }
            return res.status(200).json({ status: "sucesso", dados: produto });
        } catch (error) {
            return res.status(500).json({ status: "erro", mensagem: 'Erro ao buscar produto' });
        }
    }

    static async criar(req, res) {
        try {
            const { nome_produto, quantidade_produto, quantidade_minima_produto, quantidade_maxima_produto } = req.body;
            
            if (!nome_produto || quantidade_produto === undefined || quantidade_minima_produto === undefined || quantidade_maxima_produto === undefined) {
                return res.status(400).json({ status: "erro", mensagem: 'Todos os campos são obrigatórios' });
            }

            const novoProduto = await ProdutoModel.criar(req.body);
            return res.status(201).json({ status: "sucesso", dados: novoProduto });
        } catch (error) {
            console.error('Erro ao criar produto:', error);
            return res.status(500).json({ status: "erro", mensagem: 'Erro ao cadastrar produto' });
        }
    }

    static async atualizar(req, res) {
        try {
            const { id } = req.params;
            const produtoAtualizado = await ProdutoModel.atualizar(id, req.body);
            if (!produtoAtualizado) {
                return res.status(404).json({ status: "erro", mensagem: 'Produto não encontrado' });
            }
            return res.status(200).json({ status: "sucesso", dados: produtoAtualizado });
        } catch (error) {
            console.error('Erro ao atualizar produto:', error);
            return res.status(500).json({ status: "erro", mensagem: 'Erro ao atualizar produto' });
        }
    }

    static async deletar(req, res) {
        try {
            const { id } = req.params;
            const produtoDeletado = await ProdutoModel.deletar(id);
            if (!produtoDeletado) {
                return res.status(404).json({ status: "erro", mensagem: 'Produto não encontrado' });
            }
            return res.status(200).json({ status: "sucesso", mensagem: 'Produto removido com sucesso' });
        } catch (error) {
            console.error('Erro ao deletar produto:', error);
            return res.status(500).json({ status: "erro", mensagem: 'Erro ao deletar produto' });
        }
    }

    static async verificarSituacao(req, res) {
        try {
            const produtos = await ProdutoModel.buscarTodos();
            let reposicao = {};

            produtos.forEach(produto => {
                if (produto.quantidade_produto < produto.quantidade_minima_produto) {
                    const quantidadeParaPedir = produto.quantidade_maxima_produto - produto.quantidade_produto;
                    let nomeFormatado = produto.nome_produto.toLowerCase();
                    reposicao[nomeFormatado] = quantidadeParaPedir;
                }
            });

            const itens = Object.entries(reposicao);
            let mensagemResposta = itens.length === 0 
                ? "Tudo ok! Nenhum item precisa ser reposto no momento."
                : "Precisamos repor:\n" + itens.map(([item, qtd]) => `- ${item}: ${qtd} unidades`).join('\n');

            return res.status(200).json({
                status: "sucesso",
                mensagem: mensagemResposta,
                dados_reposicao: reposicao
            });
        } catch (error) {
            console.error('Erro ao verificar situação do estoque:', error);
            return res.status(500).json({ status: "erro", mensagem: 'Erro ao consultar situação do estoque' });
        }
    }
}

module.exports = ProdutoController;