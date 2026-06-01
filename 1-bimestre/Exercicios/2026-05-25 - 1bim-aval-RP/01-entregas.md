# Sistema de Logística e Comissão

Desenvolva uma aplicação web que receba o **Valor da Encomenda**, a **Distância** (em quilômetros) e a **Classificação da Carga** (selecionada obrigatoriamente através de um menu suspenso). O programa deve calcular o **Valor do Frete** somando a taxa de quilometragem de **R$ 1,20 por km** rodado à **Taxa Fixa de Peso** correspondente à categoria escolhida pelo usuário na tabela abaixo. Por fim, o sistema deve calcular o **Valor Total** (soma do valor da encomenda com o frete), aplicar um acréscimo de **5%** sobre esse total para definir a **Comissão do Entregador** e exibir um resumo financeiro na tela com todos os custos detalhados.

| Faixa de Peso (Kg) | Classificação da Carga | Taxa Fixa de Peso (R$) |
| :--- | :--- | :--- |
| **Até 1,0 kg** | Carga Leve | R$ 5,00 |
| **Mais de 1,0 kg e menos de 5,0 kg** | Carga Média | R$ 6,00 |
| **De 5,0 kg até 10,0 kg** | Carga Pesada | R$ 7,00 |
| **Acima de 10,0 kg** | Carga Extra Pesada | R$ 11,00 |



