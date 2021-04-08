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

CREATE TABLE departements(
  id INT AUTO_INCREMENT,
  num INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE themes(
  id INT AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE types(
  id INT AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

-- CREATE TABLE sources();