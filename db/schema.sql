### Schema
DROP DATABASE IF EXISTS jamison_db;
CREATE DATABASE jamison_db;
USE jamison_db;
CREATE TABLE musician
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	profile_pic TEXT NOT NULL,
    email VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
	music_link TEXT NOT NULL,
	band BOOLEAN NOT NULL DEFAULT false,
	primary_instrument VARCHAR(255) NOT NULL,
	secondary_instrument VARCHAR(255),	
	primary_genre VARCHAR(255) NOT NULL,
	secondary_genre VARCHAR(255) NOT NULL,
	schedule VARCHAR(255) NOT NULL,
	availability VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE band
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	profile_pic TEXT NOT NULL,
    email VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
	music_link TEXT NOT NULL,
	musician BOOLEAN NOT NULL DEFAULT false,
	primary_instrument VARCHAR(255) NOT NULL,
	secondary_instrument VARCHAR(255) NOT NULL,
	primary_genre VARCHAR(255) NOT NULL,
	secondary_genre VARCHAR(255) NOT NULL,
	schedule VARCHAR(255) NOT NULL,
	availability VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
); 