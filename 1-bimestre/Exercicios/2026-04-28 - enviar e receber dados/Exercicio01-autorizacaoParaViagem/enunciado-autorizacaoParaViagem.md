````markdown
# Enunciado: Sistema de Cadastro, Categorização e Autorização de Viagem Esportiva

**Objetivo Educacional:** O intuito deste exercício é que você pratique a construção de formulários para coleta de dados, aplique **estruturas condicionais lógicas** para classificar usuários com base em regras específicas e, por fim, consolide essas informações formatando um documento final de saída.

---

### Contexto 

Uma federação regional está organizando um grande torneio juvenil e precisa de um sistema automatizado para gerenciar as inscrições dos competidores. O seu dever como desenvolvedor é criar um programa que receba as informações do participante, determine em qual **categoria etária** ele se enquadra e, caso ele seja elegível, emita automaticamente um **documento de autorização de viagem**.

### Requisitos de Entrada (O Formulário)

O sistema deve apresentar uma interface ou formulário que colete os seguintes **dados de entrada**:

* **CPF** do atleta.
* **Nome** completo do atleta.
* **Idade** (um valor numérico inteiro).
* **Nome do Responsável** legal.
* **Cidade de Origem**.
* **Cidade de Destino** (o local onde ocorrerá a competição).
* **Modalidade Esportiva:** Esta opção não deve ser de texto livre. Deve ser obrigatoriamente um **menu suspenso (dropdown list)** contendo estritamente as opções: *Vôlei*, *Futebol* e *Natação*.

### Regras de Negócio (Categorização)

Após receber os dados, o programa deve analisar a **idade** fornecida e aplicar a seguinte **lógica de classificação**:

* **Menos de 7 anos:** O sistema deve bloquear a inscrição e informar que o atleta **não pode participar** por não atingir a idade mínima.
* **De 7 a 11 anos:** O atleta deve ser classificado na categoria **Infantil**.
* **De 12 a 13 anos:** O atleta deve ser classificado na categoria **Pré-adolescente**.
* **De 14 a 18 anos:** O atleta deve ser classificado na categoria **Adolescente**.
* **Acima de 18 anos:** O sistema deve bloquear a inscrição e informar que o atleta **não pode competir**, pois o torneio é restrito a menores de idade.

### Requisitos de Saída (Emissão da Autorização)

Caso o atleta passe pelas validações de idade (ou seja, tenha entre 7 e 18 anos), o sistema deve imprimir na tela um documento formalizado. A **Autorização para Viagem** deve consolidar as informações fornecidas, exibindo claramente:

1.  Um **cabeçalho oficial** (ex: "AUTORIZAÇÃO DE VIAGEM ESPORTIVA").
2.  Os **dados do atleta** (Nome, CPF e Idade).
3.  A **modalidade esportiva** e a **categoria** em que ele vai competir.
4.  As **informações logísticas** (Cidade de Origem e Cidade de Destino).
5.  O **nome do responsável**, que atesta a ciência e autoriza o deslocamento.