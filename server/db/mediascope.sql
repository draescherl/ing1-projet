DROP DATABASE mediascope;
CREATE DATABASE mediascope;
USE mediascope;

DROP USER IF EXISTS '[redacted]'@'localhost';
CREATE USER '[redacted]'@'localhost' IDENTIFIED BY 'mdp';
GRANT ALL PRIVILEGES ON mediascope.* to '[redacted]'@'localhost';

-- CREATE TABLE departements();
-- CREATE TABLE sources();
-- CREATE TABLE themes();

CREATE TABLE types(
  id INT AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);