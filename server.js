//Install express server
const express = require("express");
const pool = require('./data/config');

const app = express();
var cors = require('cors');
var routes = require('./routes'); 
app.use(cors());
app.use('/', routes);
app.use('/cargo', routes);
/*
let valor = app.get("/", function (req, res) {
    pool.query('SELECT * FROM perfil ', (error, result) => {
        if (error) throw error;
        return res.send(result);
    });
});
*/
app.listen(process.env.PORT || 8080)