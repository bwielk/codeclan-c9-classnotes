var name = 'Craig';
var es6 = false;

// If a value in an object we're creating is currently stored in a variable
// Chances are the key we want to store it under will have the same name as
// that variable
var person = {name: name, es6: es6};

var withDescrtucturing = function (object) {
  // Most of the time we want the local, function-scoped
  // variable to have the same name as the key on the object.
  var {name: name, es6: es6} = object;
  console.log(name);
  console.log(es6);
};

withDescrtucturing(person);
