DROP DATABASE IF EXISTS department_db;
CREATE DATABASE department_db;

USE department_db;

CREATE TABLE department (
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(30), 
PRIMARY KEY (id)
);

CREATE TABLE role (
id INT AUTO_INCREMENT NOT NULL,
title VARCHAR(30),
salary DECIMAL NOT NULL,
department_id INT,
CONSTRAINT demo_department_id FOREIGN KEY (department_id) REFERENCES department(id),
PRIMARY KEY (id)
);

CREATE TABLE employee (
id INT AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT NOT NULL,
manager_id INT NOT NULL,
CONSTRAINT demo_role_id FOREIGN KEY (role_id) REFERENCES ROLE (id),
PRIMARY KEY (id)
);

SELECT * FROM employee;

SELECT * FROM role;

SELECT * FROM department;

INSERT INTO department (name)
VALUES ('Installation');
INSERT INTO department (name)
VALUES ('Sales');
INSERT INTO department (name)
VALUES ('Configuration');
INSERT INTO department (name)
VALUES ('Accounting');
INSERT INTO department (name)
VALUES ('Auto');

SELECT * FROM department;

INSERT INTO role (title, salary, department_id)
VALUES ('Contractor', 40000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ('Salesperson', 50000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ('Programmer', 75000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ('Accountant', 65000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ('Auto Sales', 85000, 5);

SELECT * FROM role;

INSERT into employee (first_name, last_name, role_id)
VALUES ('Steve', 'Stevenson', 5);
INSERT into employee (first_name, last_name, role_id)
VALUES ('Marci', 'Stevenson', 4);
INSERT into employee (first_name, last_name, role_id)
VALUES ('Christian', 'Christianson', 3);
INSERT into employee (first_name, last_name, role_id)
VALUES ('JD', 'Stevenson', 2);
INSERT into employee (first_name, last_name, role_id)
VALUES ('Alex', 'Alexson', 1);

SELECT * FROM employee