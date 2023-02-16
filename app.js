// Config variables d'environnement
require('dotenv').config();

// Import d'express
const express = require('express');
// Création d'un serveur
const app = express();


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