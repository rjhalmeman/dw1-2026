const alternativas = [1, 2, 4, 8, 16, 32, 64, 128, 256];

// Escuta a tecla Enter no campo de resposta
document.getElementById('resposta').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        corrigir();
    }
});

function qualProva(aOUb) {
    document.getElementById('valorQuestao').value = 2.0;
    if (aOUb === 'A') {
        document.getElementById('gabarito').value = 397;

    } else if (aOUb === 'B') {
        document.getElementById('gabarito').value = 460;
    }
    document.getElementById('resposta').focus();
}

function corrigir() {
    const inputResposta = document.getElementById('resposta');
    const vQuestao = parseFloat(document.getElementById('valorQuestao').value) || 0;
    const vGabarito = parseInt(document.getElementById('gabarito').value) || 0;
    const vResposta = parseInt(inputResposta.value) || 0;

    // Conversão Binária (9 bits para cobrir até 511)
    document.getElementById('bin-gabarito').textContent = vGabarito.toString(2).padStart(9, '0');
    document.getElementById('bin-resposta').textContent = vResposta.toString(2).padStart(9, '0');

    const ignoradas = [16, 32];

    const itensGabarito = alternativas.filter(alt =>
        (vGabarito & alt) === alt && !ignoradas.includes(alt)
    );

    const itensResposta = alternativas.filter(alt =>
        (vResposta & alt) === alt && !ignoradas.includes(alt)
    );


    //const itensGabarito = alternativas.filter(alt => (vGabarito & alt) === alt);
    //const itensResposta = alternativas.filter(alt => (vResposta & alt) === alt);

    let acertos = 0;
    let erros = 0;

    // Limpeza e UI
    const uiGab = document.getElementById('lista-gabarito');
    const uiResp = document.getElementById('lista-resposta');
    uiGab.innerHTML = ""; uiResp.innerHTML = "";

    itensGabarito.forEach(n => {
        const li = document.createElement('li');
        li.textContent = n;
        li.className = "correct";
        uiGab.appendChild(li);
    });

    itensResposta.forEach(n => {
        const li = document.createElement('li');
        li.textContent = n;
        if (itensGabarito.includes(n)) {
            li.className = "correct";
            acertos++;
        } else {
            li.className = "wrong";
            erros++;
        }
        uiResp.appendChild(li);
    });

    // Lógica de Cálculo
    const saldo = Math.max(0, acertos - erros);
    const totalItensCorretos = itensGabarito.length;
    const percAcerto = totalItensCorretos > 0 ? (saldo / totalItensCorretos) : 0;
    const notaFinal = vQuestao * percAcerto;

    // Atualização dos Painéis
    document.getElementById('nota-final').textContent = notaFinal.toFixed(2);
    document.getElementById('porcentagem').textContent = (percAcerto * 100).toFixed(0) + "%";
    document.getElementById('detalhe-calculo').textContent =
        `Cálculo: (${acertos} acertos - ${erros} erros) / ${totalItensCorretos} itens do gabarito`;

    document.getElementById('resultado').classList.remove('hidden');

    // --- MELHORIA DE UX ---
    // Devolve o foco para o input e seleciona o texto atual
    inputResposta.focus();
    inputResposta.select();
}