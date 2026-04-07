Exercício: Sistema de Tarifação de Estacionamento
Contexto:
Você foi contratado para desenvolver o módulo de cálculo de um sistema de gestão de estacionamentos. O objetivo é criar uma interface simples onde o operador possa inserir os dados do veículo e obter o valor final a ser cobrado do cliente.

Requisitos do Sistema:

1. Regras de Tarifação (Base)
O cálculo do valor base deve seguir a seguinte hierarquia:

Tarifa por Hora: A primeira hora custa R$ 5,00. Cada hora adicional custa R$ 2,50.

Tarifa Diária: Se o tempo de permanência for igual ou superior a 24 horas, deve-se cobrar uma diária fixa de R$ 60,00 por cada período de 24h, somando-se o valor das horas excedentes (cobradas como horas adicionais de R$ 2,50).

2. Modificadores de Valor
Após o cálculo do valor base, devem ser aplicadas as seguintes condições:

Adicional de Porte: Se o carro for considerado "Grande", deve haver um acréscimo de 25% sobre o valor total.

Fidelidade: Se o usuário for um "Cliente Frequente", ele recebe um desconto de 5% sobre o valor (aplicado após o possível acréscimo de porte).

3. Interface (Frontend)
Crie uma página HTML contendo:

Um campo de entrada numérica para as horas estacionadas.

Dois campos de texto (ou seleção) para identificar se o carro é grande (s/n) e se o cliente é frerequente (s/n). Use checkbox.

Um botão "Calcular Tarifa".

Um local para exibir o resultado final formatado (ex: "O valor total é R$ 0,00").

4. Lógica (JavaScript)
Desenvolva uma função que:

Capture os valores inseridos pelo usuário.

Processe a lógica de dias completos e horas remanescentes.

Verifique as strings de entrada para aplicar os bônus e ônus.

Exiba o valor final com duas casas decimais.