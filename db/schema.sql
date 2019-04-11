DROP DATABASE IF EXISTS jamison_db;
CREATE DATABASE jamison_db
USE jamison_db;

CREATE TABLE Musicians
(
	id INT NOT NULL AUTO_INCREMENT,
	userName VARCHAR(255) NOT NULL,
	profile_pic TEXT,
    email VARCHAR(255) NOT NULL,
	userPassword VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
	music_link TEXT,
	on_lookout BOOLEAN NOT NULL DEFAULT false,
	primary_instrument VARCHAR(255) NOT NULL,
	secondary_instrument VARCHAR(255),
	primary_genre VARCHAR(255) NOT NULL,
	secondary_genre VARCHAR(255),
	availability VARCHAR(255),
	bio TEXT,
	createdAt DATETIME,
	updatedAt DATETIME,
	PRIMARY KEY (id)
);

CREATE TABLE Bands
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	profile_pic TEXT,
    email VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
	music_link TEXT,
	on_lookout BOOLEAN NOT NULL DEFAULT false,
	primary_instrument VARCHAR(255),
	secondary_instrument VARCHAR(255),
	primary_genre VARCHAR(255) NOT NULL,
	secondary_genre VARCHAR(255),
	availability VARCHAR(255),
	bio TEXT,
	createdAt DATETIME,
	updatedAt DATETIME,
	PRIMARY KEY (id)
); 


