# ING1 Projet

Réalisation d'un site internet pour une entreprise à l'aide de [Vue.js](https://vuejs.org/), [Express](https://expressjs.com/) et [MySQL](https://www.mysql.com).

## Suppositions
Dans ce document, chaque fois qu'une commande `cd` est utilisée, il est supposé que l'utilisateur se trouve à la racine du projet.

## Installation des dépendances du projet
### Base de données
Les scripts de création de base de donnée se situent dans le dossier `server/db/`. <br>
Afin de se connecter à la base, il est nécessaire de créer un fichier contenant les identifiants :
```
cd server/
touch creds.json
```
Dans le fichier `creds.json`, coller le contenu suivant en renseignant vos informations :
```json
{
  "host": "",
  "username": "",
  "password": "",
  "db": ""
}
```
### Côté serveur
```
cd server/
npm install
```
### Côté client
```
cd client/
npm install
```

## Exécuter une version de développement
### Côté serveur
```
cd server/
npm run dev
```
### Côté client
```
cd client/
npm run dev
```

## Mise en production
### Base de données
Voir instructions dans `Installation des dépendances du projet -> Base de données`.
### Compiler le côté client
```
cd client/
npm run build
```
La version compilée du site se trouve dans le dossier `server/public/`
### Lancer le serveur
```
cd server/
npm start
```

## Problèmes connus
Il est possible que node-sass lève une erreur lors de la compilation du côté client. Le cas échéant, exécuter la commande `npm rebuild node-sass` devrait suffire à corriger le problème.
