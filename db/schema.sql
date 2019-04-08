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
	password VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
	music_link TEXT,
	band BOOLEAN NOT NULL DEFAULT false,
	primary_instrument VARCHAR(255) NOT NULL,
	secondary_instrument VARCHAR(255),
	primary_genre VARCHAR(255) NOT NULL,
	secondary_genre VARCHAR(255),
	availability VARCHAR(255),
	PRIMARY KEY (id)
);

CREATE TABLE band
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	profile_pic TEXT NOT NULL,
    email VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
	music_link TEXT,
	musician BOOLEAN NOT NULL DEFAULT false,
	primary_instrument VARCHAR(255) NOT NULL,
	secondary_instrument VARCHAR(255),
	primary_genre VARCHAR(255) NOT NULL,
	secondary_genre VARCHAR(255),
	availability VARCHAR(255),
	PRIMARY KEY (id)
); 