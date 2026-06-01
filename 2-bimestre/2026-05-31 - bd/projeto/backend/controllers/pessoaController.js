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
