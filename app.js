// Config variables d'environnement
require('dotenv').config();

// Import d'express
const express = require('express');

// Connection à la db et synchronisation
// Import de la db 
const db = require('./models');
// Connection
db.sequelize.authenticate()
    .then(() => console.log('Connection to DB success'))
    .catch((err) => console.log('Connection to DB failed', err))
// Synchronisation
if (process.env.NODE_ENV === 'development'){
    db.sequelize.sync({ force : true });
    // ↑ Créer les tables, si existent déjà, les supprime et les refait
    // db.sequelize.sync({ alter : { drop : false } });
    // ↑ Autorise la modification des tables/columns mais n'autorise pas la suppression des tables/columns
}


// Création d'un serveur
const app = express();

// Middleware application lvl
// Logger (Morgan)
const morgan = require('morgan');
app.use(morgan('tiny'));
// Gestion des données POST  des formulaires
app.use(express.urlencoded({ extended : true }));

// Congiguration du moteur de vues 
// nous utilisons ejs mais il y en a d'autres (pug, mustache,...)
// -> npm i ejs
app.set('view engine', 'ejs');
// ↑ Utilise ejs comme moteur de vues (view engine).
// app.set('view engine', 'pug');   // -> npm i pug

app.set('views', 'views');
// ↑ Pour indiquer le dossier dans lequel les vues doivent être cherchées.


// Gestion des dossiers statiques
// Pour rendre accessible le dossier public et faire en sorte que les images, les fichiers css etc soient gérés
app.use(express.static('public'));



// Configuration de l'app, pour qu'elle utilise le router
const router = require('./router');
app.use(router);



// Lancement du serveur
app.listen(process.env.PORT, () => {
    console.log(`Server started on port : ${process.env.PORT}`);
});