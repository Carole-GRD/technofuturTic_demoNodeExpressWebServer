const db = require("../models");


// Création du controller
const messageController = {

    getMessages : async (req, res) => {
        console.log(`We are here : ${req.url}`);
        // res.status(200).send('<h1>Messages</h1>');

        // Récupération de tous les messages
        try {
            const messages = await db.Message.findAll();
            // Construction des datas
            const data = { title : 'Messages', messages };

            res.render('message/message', data);
        }
        catch(err) {
            // Si moindre erreur, renvoie d'une erreur 500
            res.sendStatus(500);
        }
            


    }, 

    getForm : (req, res) => {
        console.log(`We are here : ${req.url}`);
        // res.status(200).send('<h1>Ajouter un message</h1>');
        const data = { title : 'Add message' };
        res.render('message/addMessage', data);
    }, 

    postMessage : async (req, res) => {
        console.log(`Traitement des datas...`);

        try {
            console.log(req.body);
            // await db.Message.create(req.body);
            const data = {
                ...req.body,
                urgent : req.body.urgent === 'on' ? true : false
            }
            console.log(data);
            await db.Message.create(data);
            res.status(201).redirect('/message');
        }
        catch(err) {
            res.sendStatus(500);
        }
        // res.sendStatus(201);
    } 
}

// Export du controller
module.exports = messageController;