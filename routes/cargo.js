var express = require('express');
var router = express.Router();
var mysqlpool = require('../data/config');

/* GET home page. */
router.get('/', function(req, res, next) {
  mysqlpool.getConnection(function(err, connection) {
    connection.query('SELECT * FROM cargo', function (error, results, fields) {
      connection.release();
      if (error) throw error;
      return res.send(JSON.stringify(results, null, 4));
    });
  });
});

module.exports = router;