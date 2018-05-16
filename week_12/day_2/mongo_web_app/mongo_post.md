#Posting from a form to a mongo db

## Learning Objectives
- Perform a POST request to an API which uses a Mongo database.

## Duration
1 hour

# Intro

So far we've only done a GET request on our mongo db. Let's create a POST request from form, to create a new entry in the db. We'll add a small form to the top of the page to allow us to enter the film's title, genre and actors.

There are two ways we could create an html form on our page. One way is just to add the html form directly e.g.: 


```html
//client/build/index.html 

  <form action="/api/films" method="post"> 
      <label for="title">Title:</label>
      <input type="text" id="title" name="title" />
      <label for="genre">Genre:</label>
      <input type="text" id="genre" name="genre" />
      <label for="actors">Actors:</label>
      <input type="text" id="actors" name="actors" />
      <input type="submit" value="Save" />
  </form>
```

Another, and more dynamic way, would be to create the form and it's elements using JS and then add them to the page.

> maybe send this code via slack and talk through it to save time

```js
//client/src/views/ui.js
var UI = function() {
  var films = new Films();
  films.all(function(result){
    this.render(result);
  }.bind(this));

  this.createForm(); //ADDED
}

UI.prototype = {
    ...
    //REMEMBER THE COMMA AFTER THE PRECEEDING METHOD
    createForm: function(){  //ADDED
      //create the form and a div
      var div = document.createElement('div');
      var form = document.createElement('form');
      var body = document.querySelector('body');
    
      //append input boxes to the form
      var titleInput = document.createElement('input');
      titleInput.setAttribute("name", "title");
      form.appendChild(titleInput);
    
      var genreInput = document.createElement('input');
      genreInput.setAttribute("name", "genre");
      form.appendChild(genreInput);
    
      var actorsInput = document.createElement('input');
      actorsInput.setAttribute("name", "actors");
      form.appendChild(actorsInput);
    
      //append a button to submit the form
      var button = document.createElement('button');
      button.type = 'submit';
      button.innerText = 'Add Film';
      form.appendChild(button);
    
      //add event handler to the onSubmit event of the form
      form.onsubmit = function(e){
        e.preventDefault();
        var newFilm = {
          title: e.target.title.value,
          genre: e.target.genre.value,
          actors: e.target.actors.value.split(',')
        }
    
        var films = new Films(); 
        films.add(newFilm, function(data){
          console.log(data);
        });
    
      }
    
      div.appendChild(form);
      body.insertBefore( div, body.firstChild );
    }
}
```

So now we have our form at the top of the page, cool. 

So the next thing we need to do is create an 'add' method in films.js to add a new film when the form is submitted. This method will take a callback function, to be called when the film has been successfully added to the db:

```js
//client/src/models/films.js
//REMEMBER TO ADD COMMA TO PRECEEDING LINE
add: function(callback) {  //ADDED
  console.log("adding film");
}
```

We already have a method makeRequest, but this does a GET request, so let's create a new method to do a POST request and call it makePostRequest. Like makeRequest this will take in a URL and a callback function, but it will also take in the data being POSTed.

Note that as we are POSTing data, we need to say that the data will be in JSON format. We can do this by calling the setRequestHeader method on the request:

```js
request.setRequestHeader("Content-type", "application/json");
```

```js
//client/src/models/films.js
//REMEMBER TO ADD COMMA TO PRECEEDING LINE

makePostRequest: function(url, callback, payload){ ///ADDED
  var request = new XMLHttpRequest();
  request.open("POST", url);
  request.setRequestHeader("Content-type", "application/json");
  request.onload = callback;
  request.send(payload);
},
```

> if time, refactor the makeRequest and makePostRequest methods into a single makeRequest method which, as well as the current parameters, also has a parameter for the request type (GET/POST etc) and for the data.

Can now make this request from the add method:

```js
//client/src/models/films.js
  add: function(newFilm, callback){
      var filmToAdd = JSON.stringify(newFilm); //ADDED
      console.log("NEW FILM", filmToAdd);
      this.makePostRequest("http://localhost:3000/api/films", filmToAdd, callback);
  }
```

Now we need to add a route to our api for when the request is made:

```js
//controllers/films.js

filmRouter.post('/', function(req, res) {
  console.log("Adding a New Film");
});
```

> check this works

We now want to create a new film object from the data passed to our request:

```js
//controllers/films.js
//top of file
var query = new FilmQuery();
var Film = require('../client/src/models/film'); //ADDED

//add new film
filmRouter.post('/', function(req, res) {
  console.log(req.body)
  var film = new Film({
    title: req.body.title,
    genre: req.body.genre,
    actors: req.body.actors 
  });
  console.log(newFilm); 
});
```

So before we add anything else to our controller route, we need to add a method to our FilmQuery prototype to add a new entry to our mongo db. If an entry is successfully added then we will just return the updated JSON. This method will take in the film object to be added and a callback function to be executed on success. 

> the code will be very similar to the ___all___ method 

```js
//filmQuery.js
//REMEMBER TO ADD A COMMA TO THE PREVIOUS LINE
add: function(filmToAdd, onQueryFinished) {  //NEW
  MongoClient.connect(this.url, function(err, db) {
    if(db){
        var collection = db.collection('films');
        collection.insert(filmToAdd);
        collection.find().toArray(function(err, docs) {
          console.log(docs);
          onQueryFinished(docs);
        });
      };
  });
}
```

We can now update the route in the controller to add the new film and display the updated data in JSON format:

```js
//controllers/films.js

filmRouter.post('/', function(req, res) {
  console.log("New Film");
  var newFilm = { 
    title: req.body.title,
    actors: req.body.actors,
    genre: req.body.genre,
    reviews: [{ 
      comment: req.body.comment,
      rating: req.body.rating,
      author: req.body.author
    }],
  };
  query.add(newFilm,function(results){ //NEW
    res.json(results);
  });
});
```


