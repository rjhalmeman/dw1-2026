document.addEventListener('DOMContentLoaded', () => {
    const btnEnviar = document.getElementById('btn-enviar-mensagem');
    const inputMensagem = document.getElementById('input-mensagem');
    const divResposta = document.getElementById('resposta-bilhete');

    if (btnEnviar) {
        btnEnviar.addEventListener('click', async () => {
            const mensagem = inputMensagem.value.trim();
            if (!mensagem) return alert('Digite uma mensagem!');

            try {
                const res = await ApiService.enviarMensagem(mensagem);
                divResposta.style.display = 'block';
                divResposta.innerText = res.mensagem;
            } catch (err) {
                alert('Erro ao enviar mensagem.');
            }
        });
    }
});