
const { DataTypes, Sequelize, ModelStatic } = require('sequelize');


/**
 * Constructeur du model Message    
 * (-> pour avoir les méthodes disponibles sur sequelize. ...)
 * @param { Sequelize } sequelize
 * @returns { ModelStatic<any> }
 */

module.exports = (sequelize) => {

    // define (nomModel, attributsModel, optionsModel)
    const Message = sequelize.define('Message', {
        // id est autogénéré (entier auto-incrémenté, qui va démarrer à 1)
        author : {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        title : {
            type: DataTypes.STRING,
            allowNull: false
        },
        msg : {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        urgent : {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        tableName : 'Message',  
        // ↑ Pour indiquer le nom de la table qu'il doit créer à la fin de la synchronisation, sinon, par défaut, il prend le nom du Model, avec un s à la fin

        // createdAt: 'Date de création',   
        // timestamps: true,
        // updatedAt: 'updateTimestamp'
    })

    return Message;
}