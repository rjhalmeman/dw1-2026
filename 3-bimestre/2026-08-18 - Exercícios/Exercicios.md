# Fazer um CRUD para cada um dos temas abaixo. Usar o modelo que está no dia 13/08/2026

---

### 1. Livro
- **id_livro** int (pk)
- **titulo** varchar(100)
- **autor** varchar(50)
- **ano_publicacao** int
- **genero** varchar(30)
- **paginas** int

---


### 2. Aluno
- **RA_aluno** int (pk)
- **nome_completo** varchar(80)
- **data_nascimento** date
- **email** varchar(50)
- **telefone** varchar(15)
- **curso** varchar(40)

---

### 3. Veiculo
- **id_veiculo** int (pk)
- **marca** varchar(30)
- **modelo** varchar(40)
- **ano_fabricacao** int
- **cor** varchar(20)
- **placa** char(7)

---

### 4. Cliente
- **id_cliente** int (pk)
- **nome** varchar(60)
- **cpf** char(11)
- **endereco** varchar(100)
- **cidade** varchar(40)
- **uf** char(2)
- **telefone** varchar(15)

--- 
### 5. Disciplina
- **id_disciplina** int (pk)
- **nome_disciplina** varchar(50)
- **carga_horaria** int
- **professor** varchar(50)
- **semestre** int

---

### 6. Imovel
- **id_imovel** int (pk)
- **endereco** varchar(100)
- **bairro** varchar(40)
- **cidade** varchar(40)
- **area_m2** int
- **quartos** int
- **preco_venda** decimal(12,2)

---

### 7. Inscricao
- **id_inscricao** int (pk)
- **id_evento** int
- **id_participante** int
- **data_inscricao** date
- **valor_pago** decimal(8,2)
- **forma_pagamento** varchar(20)
