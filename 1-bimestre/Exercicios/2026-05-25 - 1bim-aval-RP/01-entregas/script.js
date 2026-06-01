//script.js
window.onload = function() {  
  
    let localizadorUrl = new URLSearchParams(window.location.search);    
  
    let valorEncomenda = parseFloat(localizadorUrl.get('valor')) || 0.0;
    let distanciaKm = parseFloat(localizadorUrl.get('distancia')) || 0.0;
    let classificacaoCarga = localizadorUrl.get('carga');    
  
    let taxaFixaPeso = 0.0;
    let taxaDistanciaPorKm = 1.20;    
    
    if (classificacaoCarga === 'leve') {
        taxaFixaPeso = 5.00;
    } else if (classificacaoCarga === 'media') {
        taxaFixaPeso = 6.00;
    } else if (classificacaoCarga === 'pesada') {
        taxaFixaPeso = 7.00;
    } else if (classificacaoCarga === 'extra_pesada') {
        taxaFixaPeso = 11.00;
    } else {
        taxaFixaPeso = 0.00;
    }
      
    let custoDistanciaTotal = distanciaKm * taxaDistanciaPorKm;
    let valorFreteTotal = custoDistanciaTotal + taxaFixaPeso;
    
    let subtotalAcumulado = valorEncomenda + valorFreteTotal;
   
    let comissaoEntregador = subtotalAcumulado * 0.05;   
    
    let valorTotalFinal = subtotalAcumulado + comissaoEntregador;
      
    document.getElementById('res-encomenda').innerText = 'R$ ' + valorEncomenda.toFixed(2);
    document.getElementById('res-distancia').innerText = 'R$ ' + custoDistanciaTotal.toFixed(2);
    document.getElementById('res-peso').innerText = 'R$ ' + taxaFixaPeso.toFixed(2);
    document.getElementById('res-frete').innerText = 'R$ ' + valorFreteTotal.toFixed(2);
    document.getElementById('res-comissao').innerText = 'R$ ' + comissaoEntregador.toFixed(2);
    document.getElementById('res-total').innerText = 'R$ ' + valorTotalFinal.toFixed(2);
};