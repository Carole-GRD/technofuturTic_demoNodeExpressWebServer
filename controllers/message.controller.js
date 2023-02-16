

// Création du controller
const messageController = {

    getMessage : (req, res) => {
        console.log(`We are here : ${req.url}`);
        res.status(200).send('<h1>Messages</h1>');
    }, 
    postMessage : (req, res) => {
        console.log(`Traitement des datas...`);
        res.sendStatus(201);
    } 
}

// Export du controller
module.exports = messageController;