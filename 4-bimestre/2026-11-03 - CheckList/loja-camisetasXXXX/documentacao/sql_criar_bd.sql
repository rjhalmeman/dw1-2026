-- 1. Remoção prévia das tabelas (caso existam)
DROP TABLE IF EXISTS pagamento_has_forma_pagamento CASCADE;
DROP TABLE IF EXISTS pagamento CASCADE;
DROP TABLE IF EXISTS forma_pagamento CASCADE;
DROP TABLE IF EXISTS pedido_has_produto CASCADE;
DROP TABLE IF EXISTS produto CASCADE;
DROP TABLE IF EXISTS unidade_medida CASCADE;
DROP TABLE IF EXISTS pedido CASCADE;
DROP TABLE IF EXISTS funcionario CASCADE;
DROP TABLE IF EXISTS cliente CASCADE;
DROP TABLE IF EXISTS cargo CASCADE;
DROP TABLE IF EXISTS pessoa CASCADE;

-- 2. Tabela PESSOA
CREATE TABLE pessoa (
    cpf_pessoa VARCHAR(14) PRIMARY KEY,
    nome_pessoa VARCHAR(100) NOT NULL,
    data_nascimento_pessoa DATE,
    endereco_pessoa VARCHAR(200),
    email_pessoa VARCHAR(150) UNIQUE NOT NULL,
    senha_pessoa VARCHAR(255) NOT NULL
);

-- 3. Tabela CARGO
CREATE TABLE cargo (
    id_cargo SERIAL PRIMARY KEY,
    nome_cargo VARCHAR(50) NOT NULL
);

-- 4. Tabela FUNCIONARIO (Quem está aqui é ADMIN)
CREATE TABLE funcionario (
    pessoa_cpf_pessoa VARCHAR(14) PRIMARY KEY,
    salario_funcionario NUMERIC(10, 2) NOT NULL,
    porcentagem_comissao_funcionario NUMERIC(5, 2) DEFAULT 0,
    cargo_id_cargo INT NOT NULL,
    CONSTRAINT fk_funcionario_pessoa FOREIGN KEY (pessoa_cpf_pessoa) REFERENCES pessoa (cpf_pessoa) ON DELETE CASCADE,
    CONSTRAINT fk_funcionario_cargo FOREIGN KEY (cargo_id_cargo) REFERENCES cargo (id_cargo)
);

-- 5. Tabela CLIENTE
CREATE TABLE cliente (
    pessoa_cpf_pessoa VARCHAR(14) PRIMARY KEY,
    renda_cliente NUMERIC(10, 2),
    data_cadastro_cliente DATE DEFAULT CURRENT_DATE,
    CONSTRAINT fk_cliente_pessoa FOREIGN KEY (pessoa_cpf_pessoa) REFERENCES pessoa (cpf_pessoa) ON DELETE CASCADE
);

-- 6. Tabela UNIDADE_MEDIDA
CREATE TABLE unidade_medida (
    id_unidade_medida SERIAL PRIMARY KEY,
    nome_unidade_medida VARCHAR(30) NOT NULL
);

-- 7. Tabela PRODUTO
CREATE TABLE produto (
    id_produto SERIAL PRIMARY KEY,
    nome_produto VARCHAR(100) NOT NULL,
    quantidade_estoque_produto INT NOT NULL DEFAULT 0,
    preco_unitario_produto NUMERIC(10, 2) NOT NULL,
    id_unidade_medida INT NOT NULL,
    CONSTRAINT fk_produto_unidade FOREIGN KEY (id_unidade_medida) REFERENCES unidade_medida (id_unidade_medida)
);

-- 8. Tabela PEDIDO
CREATE TABLE pedido (
    id_pedido SERIAL PRIMARY KEY,
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    cliente_pessoa_cpf_pessoa VARCHAR(14) NOT NULL,
    funcionario_pessoa_cpf_pessoa VARCHAR(14),
    CONSTRAINT fk_pedido_cliente FOREIGN KEY (cliente_pessoa_cpf_pessoa) REFERENCES cliente (pessoa_cpf_pessoa),
    CONSTRAINT fk_pedido_funcionario FOREIGN KEY (funcionario_pessoa_cpf_pessoa) REFERENCES funcionario (pessoa_cpf_pessoa)
);

-- 9. Tabela PEDIDO_HAS_PRODUTO
CREATE TABLE pedido_has_produto (
    produto_id_produto INT NOT NULL,
    pedido_id_pedido INT NOT NULL,
    quantidade INT NOT NULL,
    preco_unitario NUMERIC(10, 2) NOT NULL,
    PRIMARY KEY (produto_id_produto, pedido_id_pedido),
    CONSTRAINT fk_php_produto FOREIGN KEY (produto_id_produto) REFERENCES produto (id_produto),
    CONSTRAINT fk_php_pedido FOREIGN KEY (pedido_id_pedido) REFERENCES pedido (id_pedido) ON DELETE CASCADE
);

-- 10. Tabela FORMA_PAGAMENTO
CREATE TABLE forma_pagamento (
    id_forma_pagamento SERIAL PRIMARY KEY,
    nome_forma_pagamento VARCHAR(50) NOT NULL
);

-- 11. Tabela PAGAMENTO
CREATE TABLE pagamento (
    pedido_id_pedido INT PRIMARY KEY,
    data_pagamento TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    valor_total_pagamento NUMERIC(10, 2) NOT NULL,
    CONSTRAINT fk_pagamento_pedido FOREIGN KEY (pedido_id_pedido) REFERENCES pedido (id_pedido) ON DELETE CASCADE
);

-- 12. Tabela PAGAMENTO_HAS_FORMA_PAGAMENTO
CREATE TABLE pagamento_has_forma_pagamento (
    pagamento_id_pedido INT NOT NULL,
    forma_pagamento_id_forma_pagamento INT NOT NULL,
    valor_pago NUMERIC(10, 2) NOT NULL,
    PRIMARY KEY (pagamento_id_pedido, forma_pagamento_id_forma_pagamento),
    CONSTRAINT fk_phfp_pagamento FOREIGN KEY (pagamento_id_pedido) REFERENCES pagamento (pedido_id_pedido) ON DELETE CASCADE,
    CONSTRAINT fk_phfp_forma_pagamento FOREIGN KEY (forma_pagamento_id_forma_pagamento) REFERENCES forma_pagamento (id_forma_pagamento)
);

-- DADOS INICIAIS
INSERT INTO unidade_medida (nome_unidade_medida) VALUES ('UN'), ('CX'), ('KG');

INSERT INTO cargo (nome_cargo) VALUES ('Administrador da Loja'), ('Vendedor');

-- Cliente Comum (NÃO é funcionário -> NÃO é admin)
INSERT INTO pessoa (cpf_pessoa, nome_pessoa, data_nascimento_pessoa, endereco_pessoa, email_pessoa, senha_pessoa)
VALUES ('111.111.111-11', 'Cliente Comum', '1995-05-10', 'Rua das Flores, 123', 'cliente@email.com', '123456');

INSERT INTO cliente (pessoa_cpf_pessoa, renda_cliente)
VALUES ('111.111.111-11', 3000.00);

-- Administrador (É funcionário -> É admin)
INSERT INTO pessoa (cpf_pessoa, nome_pessoa, data_nascimento_pessoa, endereco_pessoa, email_pessoa, senha_pessoa)
VALUES ('000.000.000-00', 'Administrador Loja', '1990-01-01', 'Av. Central, 500', 'admin@camisetas.com', 'admin123');

INSERT INTO funcionario (pessoa_cpf_pessoa, salario_funcionario, porcentagem_comissao_funcionario, cargo_id_cargo)
VALUES ('000.000.000-00', 5000.00, 5.0, 1);

-- Produtos
INSERT INTO produto (nome_produto, quantidade_estoque_produto, preco_unitario_produto, id_unidade_medida) VALUES
('Camiseta Algodão Básica Preta', 50, 49.90, 1),
('Camiseta Estampa Rock Oversized', 30, 79.90, 1),
('Camiseta Regata Esportiva DryFit', 20, 39.90, 1);