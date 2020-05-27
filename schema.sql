DROP DATABASE IF EXISTS department_db;
CREATE DATABASE department_db;

USE department_db;

CREATE TABLE department (
id INT NOT NULL,
name VARCHAR(30), 
PRIMARY KEY (id)
);

CREATE TABLE role (
id INT NOT NULL,
title VARCHAR(30),
salary DECIMAL NOT NULL,
department_id INT
);

CREATE TABLE employee (
id INT NOT NULL,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT NOT NULL,
manager_id INT NOT NULL
);
