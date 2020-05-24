'use strict'

var express = require('express'),
    morgan = require('morgan'),
    restFul = require('express-method-override')('_method'),
    routes = require('./routes/pays-router'),
    publicDir = express.static(`${__dirname}/public`),
    viewDir = `${__dirname}/views`,
    port = (process.env.port || 3000),
    app = express();
app
    .set('views', viewDir)
    .set('view engine','jade')
    .set('port',port)
    .use(express.json())
    .use(express.urlencoded({extended : false}))
    .use(restFul)
    .use(morgan('dev'))
    .use(publicDir)
    .use(routes);

module.exports = app;