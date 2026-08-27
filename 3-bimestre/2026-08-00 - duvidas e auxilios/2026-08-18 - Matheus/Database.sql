-- Criar tabela livro com os campos especificados
CREATE TABLE public.livro (
    id_livro INT PRIMARY KEY,
    titulo VARCHAR(100),
    autor VARCHAR(50),
    ano_publicacao INT,
    genero VARCHAR(30),
    paginas INT
);

-- Inserir alguns dados de exemplo (opcional)
INSERT INTO public.livro (id_livro, titulo, autor, ano_publicacao, genero, paginas) VALUES
(1, 'Clean Code', 'Robert C. Martin', 2008, 'Programação', 464),
(2, 'Design Patterns', 'Gang of Four', 1994, 'Programação', 395),
(3, 'O Código Da Vinci', 'Dan Brown', 2003, 'Ficção', 461);
