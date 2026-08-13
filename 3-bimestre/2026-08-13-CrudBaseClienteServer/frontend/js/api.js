const API_URL = '/api';

const ApiService = {
    // Buscar todos os produtos
    async getProdutos() {
        const response = await fetch(`${API_URL}/produtos`);
        return await response.json();
    },

    // Criar produto
    async criarProduto(dados) {
        const response = await fetch(`${API_URL}/produtos`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });
        return await response.json();
    },

    // Atualizar produto
    async atualizarProduto(id, dados) {
        const response = await fetch(`${API_URL}/produtos/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });
        return await response.json();
    },

    // Deletar produto
    async deletarProduto(id) {
        const response = await fetch(`${API_URL}/produtos/${id}`, {
            method: 'DELETE'
        });
        return await response.json();
    },

    // Consultar Situação do Estoque
    async verificarSituacao() {
        const response = await fetch(`${API_URL}/produtos/situacao`);
        return await response.json();
    },

    // Enviar mensagem estilo "bilhete"
    async enviarMensagem(mensagem) {
        const response = await fetch(`${API_URL}/mensagens`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ mensagem })
        });
        return await response.json();
    }
};