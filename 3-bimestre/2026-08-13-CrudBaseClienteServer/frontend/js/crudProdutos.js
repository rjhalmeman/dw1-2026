document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-produto');
    const inputId = document.getElementById('id_produto');
    const inputNome = document.getElementById('nome_produto');
    const inputQtd = document.getElementById('quantidade_produto');
    const inputQtdMin = document.getElementById('quantidade_minima_produto');
    const inputQtdMax = document.getElementById('quantidade_maxima_produto');
    
    const btnCancelar = document.getElementById('btn-cancelar');
    const btnSituacao = document.getElementById('btn-situacao');
    const formTitulo = document.getElementById('form-titulo');
    const tabelaBody = document.getElementById('tabela-produtos-body');

    // Carregar lista de produtos ao iniciar
    carregarProdutos();

    // 1. Carregar produtos na tabela
    async function carregarProdutos() {
        try {
            const resposta = await ApiService.getProdutos();
            tabelaBody.innerHTML = '';

            if (resposta.status === 'sucesso') {
                resposta.dados.forEach(prod => {
                    const necessitaReposicao = prod.quantidade_produto < prod.quantidade_minima_produto;
                    const row = document.createElement('tr');
                    
                    row.innerHTML = `
                        <td>${prod.id_produto}</td>
                        <td>${prod.nome_produto}</td>
                        <td>${prod.quantidade_produto}</td>
                        <td>${prod.quantidade_minima_produto}</td>
                        <td>${prod.quantidade_maxima_produto}</td>
                        <td>
                            ${necessitaReposicao 
                                ? '<span class="badge-warning">Repor</span>' 
                                : '<span style="color: green;">OK</span>'}
                        </td>
                        <td class="actions-cell">
                            <button class="btn btn-primary" onclick="prepararEdicao(${prod.id_produto}, '${prod.nome_produto}', ${prod.quantidade_produto}, ${prod.quantidade_minima_produto}, ${prod.quantidade_maxima_produto})">Editar</button>
                            <button class="btn btn-danger" onclick="deletarProduto(${prod.id_produto})">Excluir</button>
                        </td>
                    `;
                    tabelaBody.appendChild(row);
                });
            }
        } catch (error) {
            console.error('Erro ao carregar produtos:', error);
            alert('Falha ao conectar com o servidor.');
        }
    }

    // 2. Submit do Formulário (Criar ou Atualizar)
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const dados = {
            nome_produto: inputNome.value.trim(),
            quantidade_produto: parseInt(inputQtd.value),
            quantidade_minima_produto: parseInt(inputQtdMin.value),
            quantidade_maxima_produto: parseInt(inputQtdMax.value)
        };

        const id = inputId.value;

        try {
            let res;
            if (id) {
                res = await ApiService.atualizarProduto(id, dados);
            } else {
                res = await ApiService.criarProduto(dados);
            }

            if (res.status === 'sucesso') {
                resetarFormulario();
                carregarProdutos();
            } else {
                alert(res.mensagem || 'Erro ao processar requisição.');
            }
        } catch (error) {
            alert('Erro de comunicação com o servidor.');
        }
    });

    // 3. Preparar formulário para Edição
    window.prepararEdicao = (id, nome, qtd, min, max) => {
        inputId.value = id;
        inputNome.value = nome;
        inputQtd.value = qtd;
        inputQtdMin.value = min;
        inputQtdMax.value = max;

        formTitulo.innerText = 'Editar Produto';
        btnCancelar.style.display = 'inline-block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // 4. Deletar Produto
    window.deletarProduto = async (id) => {
        if (confirm(`Deseja realmente excluir o produto ID ${id}?`)) {
            try {
                const res = await ApiService.deletarProduto(id);
                if (res.status === 'sucesso') {
                    carregarProdutos();
                } else {
                    alert(res.mensagem);
                }
            } catch (error) {
                alert('Erro ao excluir produto.');
            }
        }
    };

    // 5. Verificar Situação do Estoque
    btnSituacao.addEventListener('click', async () => {
        try {
            const res = await ApiService.verificarSituacao();
            alert(res.mensagem);
        } catch (error) {
            alert('Erro ao consultar situação do estoque.');
        }
    });

    // 6. Resetar Formulário
    btnCancelar.addEventListener('click', resetarFormulario);

    function resetarFormulario() {
        inputId.value = '';
        form.reset();
        formTitulo.innerText = 'Cadastrar Produto';
        btnCancelar.style.display = 'none';
    }
});