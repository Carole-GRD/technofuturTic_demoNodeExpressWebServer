// Fichier de paramétrage Sequelize
// ---------------------------------

// Import de Sequelize
const { Sequelize, DataTypes } = require('sequelize');


// Récupération des variables d'env
const { DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_SERVER } = process.env;


// Initialisation de l'objet Sequelize
// https://sequelize.org/docs/v6/getting-started/
const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host: DB_SERVER,
    port: DB_PORT,
    dialect: 'mssql'
})


// Initialisation d'un objet db, qui représentera notre db
const db = {}


// Ajout de l'instance de sequelize dans db
db.sequelize = sequelize;

// Liaison des models à db
db.Message = require('./message.model')(sequelize)

// S'il y a, on setup (mise en place) aussi, toutes les relations


module.exports = db;