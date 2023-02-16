
// Création du controller
const homeController = {
    // Définition des différentes méthodes possibles pour le controller
    getHome : (req, res) => {
        console.log(`We are here : ${req.url}`);
        const data = { title : 'Accueil' }
        res.render('home/home', data)
        // res.status(200).send('<h1>Home</h1>');
    } 
}

// Export du controller
module.exports = homeController;