### Schema

DROP DATABASE IF EXISTS jamison_db;

CREATE DATABASE jamison_db;
USE jamison_db;

CREATE TABLE musician
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
    email
    
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE band
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);