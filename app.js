// Config variables d'environnement
require('dotenv').config();

// Import d'express
const express = require('express');
// Création d'un serveur
const app = express();

// Configuration de l'app, pour qu'elle utilise le router
const router = require('./router');
app.use(router);

// Lancement du serveur
app.listen(process.env.PORT, () => {
    console.log(`Server started on port : ${process.env.PORT}`);
});