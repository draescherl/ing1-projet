# ING1 Enedis

Réalisation d'un site internet pour le service communication de la Direction Régionale Enedis Pyrénées et Landes à l'aide de [Vue.js](https://vuejs.org/), [Express](https://expressjs.com/) et [MySQL](https://www.mysql.com).

## Suppositions
Dans ce document, chaque fois qu'une commande `cd` est utilisée, il est supposé que l'utilisateur se trouve à la racine du projet.

## Installation des dépendances du projet
### Base de données
Les scripts de création de base de donnée se situent dans le dossier `server/`
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
npm run serve
```

## Mise en production
### Base de données
Les scripts de création de base de donnée se situent dans le dossier `server/db/`
### Compiler le côté client
```
cd client/
npm run build
```
La version compilée du site se trouve dans le dossier `client/dist/`
### Lancer le serveur
```
cd server/
npm start
```

## Problèmes connus
Il est possible que node-sass lève une erreur lors de la compilation du côté client. Le cas échéant, exécuter la commande `npm rebuild node-sass` devrait suffire à corriger le problème.

## Auteurs
* **Yacine Akki** - akkiyacine@eisti.eu
* **Tahirah Bhatti** - bhattitahi@eisti.eu
* **Matthieu Cabrera** - cabreramat@eisti.eu
* **Lucas Draescher** - draescherl@eisti.eu
* **Paul Equinet** - equinetpau@eisti.eu