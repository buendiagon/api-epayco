'use strict'

var PaysController = () => { }

PaysController.getResponse = (req, res) => {
    console.log("Recibiendo response por metodo GET ");
    res.statusCode = 302
    res.setHeader('Server', 'Apache/2.4.23 (Win64) PHP/5.6.25')
    res.setHeader('Location', 'onlinepays://onlinepays')
    res.setHeader('Content-Type', 'text/html; charset=iso-8859-1')
    res.send('Todo bien');
    res.end()
}
PaysController.getConfirmation = (req, res) => {
    console.log("Recibiendo confirmation por metodo GET");
    res.end()
}
PaysController.error404 = (req, res, next) => {
    let error = new Error(),
        locals = {
            title: 'Error 404',
            description: 'resource not found',
            error: error
        }
    error.status = 404;
    res.render('error', locals);
    next();
}

module.exports = PaysController