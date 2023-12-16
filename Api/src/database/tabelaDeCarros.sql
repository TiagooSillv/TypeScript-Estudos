CREATE DATABASE Concessionaria;

CREATE TABLE Carros (
	id SERIAL PRIMARY KEY,
  marca VARCHAR (100),
  modelo varchar (100),
  ano date,
  cor varchar,
  valor int
);

