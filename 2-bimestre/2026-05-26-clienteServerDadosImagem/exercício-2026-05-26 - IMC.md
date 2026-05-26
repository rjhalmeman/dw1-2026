# 📋 Tutorial e Exercícios: Comunicação Cliente/Servidor

Funcionamento da arquitetura **Cliente/Servidor** utilizando **Node.js, Express, multer e HTML**, seguido de exercícios práticos para fixação.

---

## 🎯 Objetivo

Entender como dados de imagens trafegam da interface do usuário (Cliente) para a lógica de processamento (Servidor).


## 📝 Exercício

### 1. Envio de dados de uma Pessoa
**Objetivo:** Praticar envio de dados, inclusive imagens, e lógica condicional (`if/else`) no servidor.

* **O Cliente:** Envia o CPF, nome, foto, peso, altura.

* **O Servidor:** Calcula o imc, classifica de acordo com o imc e armazena a foto do aluno em uma pasta no servidor usando o cpf como nome do arquivo. Extensão PNG.

imc = peso / altura²

| Classificação IMC |    IMC     |
|------------------|-------------|
| Magreza grave | < 16,0 |
| Magreza moderada | 16,0 a 16,9 |
| Magreza leve | 17,0 a 18,4 |
| Saudável | 18,5 a 24,9 |
| Sobrepeso | 25,0 a 29,9 |
| Obesidade Grau I | 30,0 a 34,9 |
| Obesidade Grau II | 35,0 a 39,9 |
| Obesidade Grau III (mórbida) | ≥ 40,0 |


* **O Retorno:** O nome do aluno, o imc e a classificação de acordo com o imc.

Crie no github um repositório chamado dw1-2bimestre (se não existir). Neste repositório estarão todos os exercícios, cada um em uma pasta, do bimestre.

Suba seu projeto para o github.

Envie o link github para: https://forms.gle/orN81F6WqvW5L3rk8
