var express = require('express');
var filmRouter = express.Router();
var FilmQuery = require('../db/filmQuery');
var query = new FilmQuery();

//film index
filmRouter.get('/', function(req, res) {
  query.all(function(results){ //NEW
    res.json(results);
  });
});

module.exports = filmRouter;
