

// Création du controller
const messageController = {

    getMessages : (req, res) => {
        console.log(`We are here : ${req.url}`);
        // res.status(200).send('<h1>Messages</h1>');
        const data = { title : 'Messages' };
        res.render('message/message', data);
    }, 

    getForm : (req, res) => {
        console.log(`We are here : ${req.url}`);
        // res.status(200).send('<h1>Ajouter un message</h1>');
        const data = { title : 'Add message' };
        res.render('message/addMessage', data);
    }, 

    postMessage : (req, res) => {
        console.log(`Traitement des datas...`);
        res.sendStatus(201);
    } 
}

// Export du controller
module.exports = messageController;