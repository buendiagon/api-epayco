'use strict'

var PaysController = require('../controllers/pays-controller'),
    express = require('express'),
    router = express.Router();

router
    .get('/response', PaysController.getResponse)
    .get('/confirmation', PaysController.getConfirmation)
    .use(PaysController.error404)

module.exports = router;