-- creando base de datos
CREATE DATABASE myapp;

-- usando base de datos
use myapp;

-- crear tabla

CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    telefono VARCHAR(10) NOT NULL
);

-- MOSTRAR TABLAS 
SHOW TABLES;

-- DESCRIBIR TABLA

DESCRIBE customer;