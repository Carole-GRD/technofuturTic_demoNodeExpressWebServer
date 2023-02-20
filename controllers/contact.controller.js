const db = require("../models");

const contactController = {

    getContacts: async (req, res) => {
        console.log('Liste de tous les contacts');
        console.log(`req.url : ${req.url}`);
        // res.status(200).send('<h1>Contacts</h1>');
        
        // const data = { title: 'Contacts' };
        // res.render('contact/contact', data);

        
        try {
            const contacts = await db.Contact.findAll();
            const data = { title: 'Contacts', contacts };
            
            res.render('contact/contact', data);
        }
        catch (err) {
            res.sendStatus(500);
        }
        
    },

    getForm: (req, res) => {
        console.log('Formulaire pour ajouter un contact');
        // res.status(200).send('<h1>Ajouter un contact</h1>');
        const data = { title : 'Contact' };
        res.render('contact/addContact', data);
        // ↑ 'contact/addContat' : 
        // est une route qui correspond au nom des vues 
        // → dossier views (déjà indiqué dans app.js)
        // → dossier contact  → fichier addContact
    },

    postContact: async (req, res) => {
        console.log('Post du formulaire');
        // res.sendStatus(201);
        
        try {
            console.log(req.body);
            // res.sendStatus(201);
            const data = {
                ...req.body,
                // favori : req.body.favori === 'on' ? true : false
                favori : req.body.favori ? true : false
            }
            console.log(data);
            await db.Contact.create(data);
            res.status(201).redirect('/contact');
        }
        catch (err) {
            res.sendStatus(500);
        }
    }
}

module.exports = contactController;