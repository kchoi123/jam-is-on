### Schema

DROP DATABASE IF EXISTS jamison_db;

CREATE DATABASE jamison_db;
USE jamison_db;

CREATE TABLE musician
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
	band BOOLEAN DEFAULT false,
	instruments VARCHAR(255),
	genre VARCHAR(255),
	schedule VARCHAR(255),
	PRIMARY KEY (id)
);

CREATE TABLE band
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
	musician BOOLEAN DEFAULT false,
	instruments VARCHAR(255),
	genre VARCHAR(255),
	schedule VARCHAR(255),
	PRIMARY KEY (id)
);