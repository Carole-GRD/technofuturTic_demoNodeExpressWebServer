const { DataTypes, Sequelize, ModelStatic } = require('sequelize');

/**
 * Constructeur du model contact
 * (-> pour avoir les méthodes disponibles sur sequelize. ...)
 * @param { Sequelize } sequelize
 * @returns { ModelStatic<any> }
 */

module.exports = (sequelize) => {

    // define (nomModel, attributsModel, optionsModel)
    const Contact = sequelize.define('Contact', {
        lastName : {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstName : {
            type: DataTypes.STRING,
            allowNull: false
        },
        email : {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone : {
            type: DataTypes.STRING,
            allowNull: false
        },
        favori : {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },

    }, {
        tableName: 'Contact',
        // ↑ Pour indiquer le nom de la table qu'il doit créer à la fin de la synchronisation, sinon, par défaut, il prend le nom du Model, avec un s à la fin
    });

    return Contact;
}