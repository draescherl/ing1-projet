-- total tonalités
SELECT COUNT(*) FROM retombees WHERE conotation = (SELECT id FROM conotations WHERE name = "Positive");
-- tonalités par département
SELECT COUNT(*) FROM retombees WHERE conotation = (SELECT id FROM conotations WHERE name = "Positive") AND departement = (SELECT id FROM departements WHERE num = 40);
-- nbre de chaque type par département
SELECT COUNT(*) FROM retombees WHERE type = (SELECT id FROM types WHERE name = "PQR") AND departement = (SELECT id FROM departements WHERE num = 40);
-- nbre CP par département
SELECT COUNT(*) FROM communiques WHERE departement = (SELECT id FROM departements WHERE num = 40);
-- nbre retombées par CP par département
SELECT COUNT(*) FROM communiques, retombees WHERE communiques.cp_code = retombees.cp_code AND communiques.departement = (SELECT id FROM departements WHERE num = 65);
-- nbre de chaque thème au total
SELECT COUNT(*) FROM retombees WHERE theme = (SELECT id FROM themes WHERE name = "Partenariat");
-- nbre de chaque thème par département
SELECT COUNT(*) FROM retombees WHERE theme = (SELECT id FROM themes WHERE name = "Partenariat") AND departement = (SELECT id FROM departements WHERE num = 40);
-- tonalité par thème par département
SELECT COUNT(*) FROM retombees WHERE theme = (SELECT id FROM themes WHERE name = "RSE") AND departement = (SELECT id FROM departements WHERE num = 65) AND conotation = (SELECT id FROM conotations WHERE name = "Positive");


-- 1er trimestre  : (DATEDIFF('2020-03-31', publi_date) >= 0) AND (DATEDIFF(publi_date, '2020-01-01') >= 0)
-- 2eme trimestre : (DATEDIFF('2020-06-30', publi_date) >= 0) AND (DATEDIFF(publi_date, '2020-04-01') >= 0)
-- 3eme trimestre : (DATEDIFF('2020-09-30', publi_date) >= 0) AND (DATEDIFF(publi_date, '2020-07-01') >= 0)
-- 4eme trimestre : (DATEDIFF('2020-12-31', publi_date) >= 0) AND (DATEDIFF(publi_date, '2020-10-01') >= 0)

-- === Général : ===
-- nbre de CP par trimestre
SELECT COUNT(*) FROM communiques WHERE (DATEDIFF('2020-12-31', publi_date) >= 0) AND (DATEDIFF(publi_date, '2020-10-01') >= 0);
-- nbre de retombées liées à des CP par trimestre
SELECT COUNT(*) FROM communiques, retombees WHERE communiques.cp_code = retombees.cp_code AND (DATEDIFF('2020-12-31', retombees.publi_date) >= 0) AND (DATEDIFF(retombees.publi_date, '2020-10-01') >= 0);
-- nbre de retombées total par trimestre
SELECT COUNT(*) FROM retombees WHERE (DATEDIFF('2020-12-31', publi_date) >= 0) AND (DATEDIFF(publi_date, '2020-10-01') >= 0);
-- nbre de retombées par tonalité par trimestre
SELECT COUNT(*) FROM retombees WHERE conotation = (SELECT id FROM conotations WHERE name = "Positive") AND (DATEDIFF('2020-12-31', publi_date) >= 0) AND (DATEDIFF(publi_date, '2020-10-01') >= 0);
-- nbre de retombées par type par trimestre
SELECT COUNT(*) FROM retombees WHERE type = (SELECT id FROM types WHERE name = "PQR") AND (DATEDIFF('2020-12-31', publi_date) >= 0) AND (DATEDIFF(publi_date, '2020-10-01') >= 0);

-- === Par département : ===
-- nbre de CP par trimestre par département
SELECT COUNT(*) FROM communiques WHERE departement = (SELECT id FROM departements WHERE num = 65) AND (DATEDIFF('2020-12-31', publi_date) >= 0) AND (DATEDIFF(publi_date, '2020-10-01') >= 0);
-- nbre de retombées liées à des CP par trimestre par département
SELECT COUNT(*) FROM communiques, retombees WHERE retombees.departement = (SELECT id FROM departements WHERE num = 65) AND communiques.cp_code = retombees.cp_code AND (DATEDIFF('2020-12-31', retombees.publi_date) >= 0) AND (DATEDIFF(communiques.publi_date, '2020-10-01') >= 0);
-- nbre de retombées total par trimestre par département
SELECT COUNT(*) FROM retombees WHERE departement = (SELECT id FROM departements WHERE num = 65) AND (DATEDIFF('2020-12-31', publi_date) >= 0) AND (DATEDIFF(publi_date, '2020-10-01') >= 0);
-- nbre de retombées par tonalité par trimestre par département
SELECT COUNT(*) FROM retombees WHERE departement = (SELECT id FROM departements WHERE num = 65) AND conotation = (SELECT id FROM conotations WHERE name = "Positive") AND (DATEDIFF('2020-12-31', publi_date) >= 0) AND (DATEDIFF(publi_date, '2020-10-01') >= 0);
-- nbre de retombées par type par trimestre par département
SELECT COUNT(*) FROM retombees WHERE departement = (SELECT id FROM departements WHERE num = 65) AND type = (SELECT id FROM types WHERE name = "PQR") AND (DATEDIFF('2020-12-31', publi_date) >= 0) AND (DATEDIFF(publi_date, '2020-10-01') >= 0);