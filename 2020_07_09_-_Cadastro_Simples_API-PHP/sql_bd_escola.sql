CREATE DATABASE escola;

USE escola;

CREATE TABLE alunos (
	id int AUTO_INCREMENT,
	nome varchar (50),
    email varchar (50),
    celular varchar (11),
    logradouro varchar (30),
    numero varchar (10),
    bairro varchar (30),
	cidade varchar (30),
	estado varchar (2),
	cep varchar(8),
    PRIMARY KEY (id)
);

INSERT INTO alunos (nome, email, celular, logradouro, numero, bairro, cidade, estado, cep)
	VALUES ('jose','jose@gmail.com.br','11971716464','rua Amaro da Silva','222','Jd. terra','Anapolis','GO','18135300');


INSERT INTO alunos (nome, email, celular, logradouro, numero, bairro, cidade, estado, cep)
	VALUES ('teste','teste@gmail.com.br','11971716464','rua Amaro da Silva','222','Jd. terra','Anapolis','GO','18135300');
    
select * from alunos;