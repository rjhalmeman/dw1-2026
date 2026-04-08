/**
 * Função responsável por exibir mensagens de erro/aviso ao usuário
 * @param {string} mensagem - O texto que será exibido no container vermelho
 */
function exibirAviso(mensagem) {
    const containerAviso = document.getElementById("container-aviso");
    const mensagemAviso = document.getElementById("mensagem-aviso");
    
    if (mensagem) {
        mensagemAviso.innerText = mensagem;
        containerAviso.removeAttribute("hidden");
    } else {
        containerAviso.setAttribute("hidden", "true");
    }
}

/**
 * Função principal que captura os dados e calcula a tarifa final
 */
function calcularTarifa() {
    // 1. Definição das constantes de tarifação
    const tarifaPrimeiraHora = 5.0;
    const tarifaHoraAdicional = 2.5;
    const tarifaDiaria = 60.0;
    const adicionalCarroGrande = 1.25; // 25% de acréscimo
    const descontoClienteFrequente = 0.95; // Desconto de 5%

    // 2. Obtenção dos valores inseridos pelo usuário
    // Usa replace para garantir que vírgulas sejam tratadas como pontos em números decimais se inseridas como texto
    const horasInput = document.getElementById("horas").value.replace(',', '.');
    const carroGrande = document.getElementById("comprimento").checked; // Usando o estado (booleano) da caixa de seleção
    const clienteFrequente = document.getElementById("frequente").checked; // Usando o estado (booleano) da caixa de seleção

    // 3. Validação de segurança
    const horas = parseFloat(horasInput);
    if (isNaN(horas) || horas <= 0) {
        exibirAviso("Por favor, insira uma quantidade válida de horas (maior que zero).");
        document.getElementById("resultado").innerText = "O valor total será exibido aqui.";
        return;
    }
    
    // Limpa os avisos caso a entrada seja válida
    exibirAviso("");

    // 4. Cálculo do valor base
    let valorBase = 0;
    let diasCompletos = Math.floor(horas / 24); // Usa Math.floor para garantir o número inteiro de dias

    if (diasCompletos > 0) {
        // Cobra a diária para os dias completos e horas adicionais (a R$ 2,50 cada) para o que sobrar
        let horasExcedentes = horas % 24;
        valorBase = (diasCompletos * tarifaDiaria) + (horasExcedentes * tarifaHoraAdicional);
    } else {
        // Para permanência menor que 24 horas
        if (horas <= 1) {
            valorBase = tarifaPrimeiraHora;
        } else {
            let horasAdicionais = horas - 1;
            valorBase = tarifaPrimeiraHora + (horasAdicionais * tarifaHoraAdicional);
        }
    }

    // 5. Aplicação dos modificadores de valor (na ordem especificada)
    let valorFinal = valorBase;

    // Adicional para carros grandes (aplica-se sobre o valor atualizado)
    if (carroGrande) {
        valorFinal *= adicionalCarroGrande;
    }

    // Desconto para clientes frequentes (aplica-se após o cálculo do porte)
    if (clienteFrequente) {
        valorFinal *= descontoClienteFrequente;
    }

    // 6. Exibição do resultado formatado na interface
    // Usando replace('.', ',') para exibir no formato monetário padrão brasileiro
    document.getElementById("resultado").innerText = "O valor total é R$ " + valorFinal.toFixed(2).replace('.', ',');
}