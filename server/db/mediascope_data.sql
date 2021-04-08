-- This file will populate the freshly created database with
-- some initial values to get the service up and running quickly. 
--
-- /!\ Only run this script once or you might encounter some 
-- duplicate values. /!\

INSERT INTO departements (num) VALUES
  (40),
  (64),
  (65);

INSERT INTO themes (name) VALUES
  ("Partenariat"),
  ("Sécurité"),
  ("Transition Ecologique"),
  ("RH"),
  ("Crise Climatique"),
  ("Crise RH"),
  ("Coupure"),
  ("Linky"),
  ("RSE");

INSERT INTO types (name) VALUES
  ("PQR"),
  ("Radio"),
  ("TV"),
  ("Web"),
  ("Réseaux Sociaux");