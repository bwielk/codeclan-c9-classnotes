var Film = require('./film');
var Review = require('./review');

var Films = function() {}

Films.prototype = {
  makeRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  },
  all: function(callback){
    var self = this;
    this.makeRequest("http://localhost:3000/api/films", function(){
      if(this.status !== 200) return;
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);

      var films = self.populateFilms(results);
      callback(films);
    });
  },
  populateFilms: function(results){
    var films = [];
    
    for(var result of results){
      var film = new Film(result);
      films.push(film);
    }
    return films;
  }
}

module.exports = Films;
