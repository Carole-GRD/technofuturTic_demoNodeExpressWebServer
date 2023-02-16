const homeController = require('../controllers/home.controller');
const messageController = require('../controllers/message.controller');

// Création du router grâce à express
const router = require('express').Router();

// Configuration des routes possibles
router.get('/', homeController.getHome);
router.get('/messages', messageController.getMessage);
router.post('/messages', messageController.postMessage);

// Export du router
module.exports = router;

