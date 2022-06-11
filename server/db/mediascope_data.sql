-- This file will populate the freshly created database with
-- some initial values to get the service up and running quickly. 
--
-- /!\ Only run this script once or you might encounter some 
-- duplicate values. /!\

INSERT INTO conotations (name) VALUES
  ("Positive"),
  ("Négative");

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
  ("Web");

-- PQR
INSERT INTO sources (name, type, departement) VALUES
  -- 40
  ("L'Avenir Agricole & Viticole Aquitain 40", (SELECT id FROM types WHERE name = "PQR"), (SELECT id FROM departements WHERE num = 40)),
  ("Sud ouest Landes", (SELECT id FROM types WHERE name = "PQR"), (SELECT id FROM departements WHERE num = 40)),
  ("Les annonces Landaises", (SELECT id FROM types WHERE name = "PQR"), (SELECT id FROM departements WHERE num = 40)),
  -- 64
  ("La République des Pyrénées", (SELECT id FROM types WHERE name = "PQR"), (SELECT id FROM departements WHERE num = 64)),
  ("Le Journal de Saint Palais", (SELECT id FROM types WHERE name = "PQR"), (SELECT id FROM departements WHERE num = 64)),
  ("Le Sillon", (SELECT id FROM types WHERE name = "PQR"), (SELECT id FROM departements WHERE num = 64)),
  ("L'Eclair des Pyrénées", (SELECT id FROM types WHERE name = "PQR"), (SELECT id FROM departements WHERE num = 64)),
  ("Mediabask", (SELECT id FROM types WHERE name = "PQR"), (SELECT id FROM departements WHERE num = 64)),
  ("Sud-Ouest Béarn", (SELECT id FROM types WHERE name = "PQR"), (SELECT id FROM departements WHERE num = 64)),
  ("Sud-Ouest Pays Basque", (SELECT id FROM types WHERE name = "PQR"), (SELECT id FROM departements WHERE num = 64)),
  ("Le Miroir de la Soule", (SELECT id FROM types WHERE name = "PQR"), (SELECT id FROM departements WHERE num = 64)),
  ("L'Avenir Agricole & Viticole Aquitain 64", (SELECT id FROM types WHERE name = "PQR"), (SELECT id FROM departements WHERE num = 64)),
  -- 65
  ("Bulletin Agricole des Hautes-Pyrénées", (SELECT id FROM types WHERE name = "PQR"), (SELECT id FROM departements WHERE num = 65)),
  ("La Dépêche", (SELECT id FROM types WHERE name = "PQR"), (SELECT id FROM departements WHERE num = 65)),
  ("La Gazette du Midi", (SELECT id FROM types WHERE name = "PQR"), (SELECT id FROM departements WHERE num = 65)),
  ("La Nouvelle République des Pyrénées", (SELECT id FROM types WHERE name = "PQR"), (SELECT id FROM departements WHERE num = 65)),
  ("La semaine des Pyrénées", (SELECT id FROM types WHERE name = "PQR"), (SELECT id FROM departements WHERE num = 65)),
  ("Le Petit Journal 65", (SELECT id FROM types WHERE name = "PQR"), (SELECT id FROM departements WHERE num = 65)),
  ("L'Essor Bigourdan", (SELECT id FROM types WHERE name = "PQR"), (SELECT id FROM departements WHERE num = 65));

-- Radio
INSERT INTO sources (name, type, departement) VALUES
  -- 40
  ("Atomic Radio 40", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 40)),
  ("Chérie FM 40", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 40)),
  ("France Bleu Gascogne", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 40)),
  ("Radio 100% 40", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 40)),
  ("Frequence Grands Lacs", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 40)),
  ("Nostalgie 40", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 40)),
  ("Radio Mont de Marsan", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 40)),
  ("RFM 40", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 40)),
  ("Virgin Radio 40", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 40)),
  -- 64
  ("Atomic Radio 64", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 64)),
  ("CANAL VASCO 64", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 64)),
  ("Chérie FM 64", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 64)),
  ("Radio 100% 64", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 64)),
  ("Radio Inside 64", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 64)),
  ("Radio EITB", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 64)),
  ("France Bleu Béarn", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 64)),
  ("France Bleu Pays Basque", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 64)),
  ("Radio Gure Iratia", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 64)),
  ("Radio LAPURDI", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 64)),
  ("Radio MENDILLA", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 64)),
  ("Radio Oloron", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 64)),
  ("Radio Voix Du Béarn", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 64)),
  ("XIBEROKO BOTXA", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 64)),
  ("Virgin Radio 64", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 64)),
  ("RFM 64", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 64)),
  ("Nostalgie 64", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 64)),
  -- 65
  ("Chérie FM 65", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 65)),
  ("Radio 100% 65", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 65)),
  ("Radio Inside 65", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 65)),
  ("Radio Présence", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 65)),
  ("Radio Vallee d'Aure", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 65)),
  ("RFM 65", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 65)),
  ("Virgin Radio 65", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 65)),
  ("Nostalgie 65", (SELECT id FROM types WHERE name = "Radio"), (SELECT id FROM departements WHERE num = 65));

-- TV
INSERT INTO sources (name, type, departement) VALUES
  -- 40
  ("France 2 40", (SELECT id FROM types WHERE name = "TV"), (SELECT id FROM departements WHERE num = 40)),
  ("France 3 40", (SELECT id FROM types WHERE name = "TV"), (SELECT id FROM departements WHERE num = 40)),
  ("TV PI 40", (SELECT id FROM types WHERE name = "TV"), (SELECT id FROM departements WHERE num = 40)),
  ("Web TV Landes", (SELECT id FROM types WHERE name = "TV"), (SELECT id FROM departements WHERE num = 40)),
  -- 64
  ("France 2 64", (SELECT id FROM types WHERE name = "TV"), (SELECT id FROM departements WHERE num = 64)),
  ("France 3 64", (SELECT id FROM types WHERE name = "TV"), (SELECT id FROM departements WHERE num = 64)),
  ("TV PI 64", (SELECT id FROM types WHERE name = "TV"), (SELECT id FROM departements WHERE num = 64)),
  -- 65
  ("France 2 65", (SELECT id FROM types WHERE name = "TV"), (SELECT id FROM departements WHERE num = 65)),
  ("France 3 65", (SELECT id FROM types WHERE name = "TV"), (SELECT id FROM departements WHERE num = 65));

-- Web
INSERT INTO sources (name, type, departement) VALUES
  -- 40
  ("Annonces Landaises", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 40)),
  ("Aquitainefr 40", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 40)),
  ("Atomic Radio 40", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 40)),
  ("Avenir Aquitaine 40", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 40)),
  ("France Bleu Gascogne", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 40)),
  ("Fréquences Grands Lacs", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 40)),
  ("Le courrier français des Landes", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 40)),
  ("HpYTV 40", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 40)),
  ("Objectif Aquitaine 40", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 40)),
  ("Radio Mont De Marsan", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 40)),
  ("PressLib 40", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 40)),
  ("Radio 100% 40", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 40)),
  ("Sud Ouest 40", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 40)),
  -- 64
  ("Aquitainefr 64", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 64)),
  ("Sud Ouest 64", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 64)),
  ("Radio 100% 64", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 64)),
  ("PressLib 64", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 64)),
  ("Atomic Radio 64", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 64)),
  ("Avenir Aquitaine 64", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 64)),
  ("Entreprises Engagées 64", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 64)),
  ("Flash Infos Nouvelle Aquitaine Occitanie 64", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 64)),
  ("France Bleu Béarn 64", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 64)),
  ("France Bleu Pays Basque", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 64)),
  ("La République des Pyrénées", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 64)),
  ("Le Sillon", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 64)),
  ("Objectif Aquitaine 64", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 64)),
  ("Médiabask", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 64)),
  ("HpYTV 64", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 64)),
  ("La Semaine du Pays Basque", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 64)),
  ("WebTV Oloron", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 64)),
  -- 65
  ("Aquitainefr 65", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 65)),
  ("Atomic Radio 65", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 65)),
  ("Flash Info Nouvelle Aquitaine Occitanie 65", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 65)),
  ("HpYTV 65", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 65)),
  ("La Depêche", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 65)),
  ("La semaine des Pyrénées", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 65)),
  ("Le petit journal", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 65)),
  ("Nouvelle République Pyrénées", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 65)),
  ("PressLib 65", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 65)),
  ("Radio 100% 65", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 65)),
  ("Radio présence", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 65)),
  ("Tarbes/Lourdes Infos", (SELECT id FROM types WHERE name = "Web"), (SELECT id FROM departements WHERE num = 65));

INSERT INTO `communiques` (`id`, `publi_date`, `title`, `cp_code`, `type`, `departement`, `theme`, `pdf_path`, `hyperlink`) VALUES
  (1, '2020-12-03', 'Le réseau électrique du quartier de la Raillère à Cauterets fait peau neuve', 103, 1, 3, 9, NULL, NULL),
  (2, '2020-12-08', 'Fargues : une «Jarraf» atteint des sommets et facilite l’élagage', 104, 1, 1, 2, NULL, NULL);

INSERT INTO `retombees` (`id`, `publi_date`, `title`, `cp_code`, `type`, `departement`, `source`, `theme`, `conotation`, `pdf_path`, `hyperlink`) VALUES
  (1, '2020-12-02', 'Castelnau-Magnoac – Une semaine de chantier pour moderniser le réseau électrique', 102, 1, 3, 98, 9, 1, NULL, NULL),