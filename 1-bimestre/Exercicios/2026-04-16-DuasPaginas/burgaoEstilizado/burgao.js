
function calcularTotal() {
    let q100 = parseFloat(document.getElementById('qtd100').value);
    let q101 = parseFloat(document.getElementById('qtd101').value);
    let q102 = parseFloat(document.getElementById('qtd102').value);
    let q103 = parseFloat(document.getElementById('qtd103').value);
    let q104 = parseFloat(document.getElementById('qtd104').value);
    let q105 = parseFloat(document.getElementById('qtd105').value);

    let total = (q100 * 18.10) +
        (q101 * 11.30) +
        (q102 * 11.50) +
        (q103 * 19.10) +
        (q104 * 21.30) +
        (q105 * 6.00);

    document.getElementById('resultado').innerText = "Total a pagar: R$ " + total.toFixed(2).replace('.', ',');
}
