no postgresql

Crie um banco de dados chamado dw1-db-2026

Neste banco de dados, crie uma tabela chamada pessoa (em public).

CREATE TABLE public.pessoa (
	cpf_pessoa varchar(15) NOT NULL,
	nome_pessoa varchar(60) NULL,
	data_nascimento_pessoa timestamp NULL,
	CONSTRAINT pessoa_pk PRIMARY KEY (cpf_pessoa)
);


