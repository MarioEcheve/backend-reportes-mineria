var express = require('express');
var app = express();

// Defining all the routes
var index = require('./routes/index');
var cargo = require('./routes/cargo');

// Linking all the routes
app.use('/', index);
app.use('/cargo', cargo);

module.exports = app;
