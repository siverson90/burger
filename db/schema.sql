CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id INT NOT NULL AUTO_INCREMENT,
'burger_name' VARCHAR (40),
'devoured' BOOLEAN,
`date` TIMESTAMP DEFAULT,
PRIMARY KEY (id)
);
