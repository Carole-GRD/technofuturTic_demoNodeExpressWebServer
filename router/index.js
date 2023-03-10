const contactController = require('../controllers/contact.controller');
const homeController = require('../controllers/home.controller');
const messageController = require('../controllers/message.controller');

// Création du router grâce à express
const router = require('express').Router();

// Configuration des routes possibles
// Lien vers la home page
router.get('/', homeController.getHome);
// Lien vers la liste de tous les messages
router.get('/message', messageController.getMessages);
// Lien vers le formulaire pour add un message
router.get('/message/add', messageController.getForm);
// Post du formulaire
router.post('/message/add', messageController.postMessage);



router.get('/contact', contactController.getContacts);
router.get('/contact/add', contactController.getForm);
router.post('/contact/add', contactController.postContact);



// Export du router
module.exports = router;

