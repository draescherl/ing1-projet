-- In this file you will find all the instructions to create the MySQL 
-- database for this project.
--
-- Make sure to change your user/host/password to match your production
-- environment.

DROP DATABASE IF EXISTS mediascope;
CREATE DATABASE mediascope;
USE mediascope;

DROP USER IF EXISTS '[redacted]'@'localhost';
CREATE USER '[redacted]'@'localhost' IDENTIFIED BY 'mdp';
GRANT ALL PRIVILEGES ON mediascope.* to '[redacted]'@'localhost';

CREATE TABLE conotations (
  id TINYINT AUTO_INCREMENT,
  name VARCHAR(15) NOT NULL UNIQUE,
  PRIMARY KEY (id)
);

CREATE TABLE departements (
  id TINYINT AUTO_INCREMENT,
  num TINYINT NOT NULL UNIQUE,
  PRIMARY KEY (id)
);

CREATE TABLE themes (
  id TINYINT AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL UNIQUE,
  PRIMARY KEY (id)
);

CREATE TABLE types (
  id TINYINT AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL UNIQUE,
  PRIMARY KEY (id)
);

CREATE TABLE sources (
  id SMALLINT AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  type TINYINT NOT NULL,
  departement TINYINT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (type) REFERENCES types(id),
  FOREIGN KEY (departement) REFERENCES departements(id)
);

CREATE TABLE retombees (
  id INT AUTO_INCREMENT,
  publi_date DATE NOT NULL,
  title VARCHAR(100) NOT NULL,
  cp_code INT NOT NULL,
  type TINYINT NOT NULL,
  departement TINYINT NOT NULL,
  source SMALLINT NOT NULL,
  theme TINYINT NOT NULL,
  conotation TINYINT NOT NULL,
  pdf_path VARCHAR(255) DEFAULT NULL,
  hyperlink TEXT DEFAULT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (type) REFERENCES types(id),
  FOREIGN KEY (departement) REFERENCES departements(id),
  FOREIGN KEY (source) REFERENCES sources(id),
  FOREIGN KEY (theme) REFERENCES themes(id),
  FOREIGN KEY (conotation) REFERENCES conotations(id)
);

CREATE TABLE communiques (
  id INT AUTO_INCREMENT,
  publi_date DATE NOT NULL,
  title VARCHAR(100) NOT NULL,
  cp_code INT NOT NULL,
  type TINYINT NOT NULL,
  departement TINYINT NOT NULL,
  theme TINYINT NOT NULL,
  pdf_path VARCHAR(255) DEFAULT NULL,
  hyperlink TEXT DEFAULT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (type) REFERENCES types(id),
  FOREIGN KEY (departement) REFERENCES departements(id),
  FOREIGN KEY (theme) REFERENCES themes(id)
);



source server/db/mediascope_data.sql;