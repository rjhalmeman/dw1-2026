const pool = require('../config/database');

class ProdutoModel {
    static async buscarTodos() {
        const query = 'SELECT * FROM public.produto ORDER BY id_produto ASC';
        const result = await pool.query(query);
        return result.rows;
    }

    static async buscarPorId(id_produto) {
        const query = 'SELECT * FROM public.produto WHERE id_produto = $1';
        const result = await pool.query(query, [id_produto]);
        return result.rows[0];
    }

    static async criar(dados) {
        const { nome_produto, quantidade_produto, quantidade_minima_produto, quantidade_maxima_produto } = dados;
        const query = `
            INSERT INTO public.produto (nome_produto, quantidade_produto, quantidade_minima_produto, quantidade_maxima_produto)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `;
        const values = [nome_produto, quantidade_produto, quantidade_minima_produto, quantidade_maxima_produto];
        const result = await pool.query(query, values);
        return result.rows[0];
    }

    static async atualizar(id_produto, dados) {
        const { nome_produto, quantidade_produto, quantidade_minima_produto, quantidade_maxima_produto } = dados;
        const query = `
            UPDATE public.produto 
            SET nome_produto = $1, quantidade_produto = $2, quantidade_minima_produto = $3, quantidade_maxima_produto = $4
            WHERE id_produto = $5
            RETURNING *;
        `;
        const values = [nome_produto, quantidade_produto, quantidade_minima_produto, quantidade_maxima_produto, id_produto];
        const result = await pool.query(query, values);
        return result.rows[0];
    }

    static async deletar(id_produto) {
        const query = 'DELETE FROM public.produto WHERE id_produto = $1 RETURNING *';
        const result = await pool.query(query, [id_produto]);
        return result.rows[0];
    }
}

module.exports = ProdutoModel;