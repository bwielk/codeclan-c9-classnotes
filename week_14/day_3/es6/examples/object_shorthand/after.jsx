var name = 'Craig';
var es6 = true;

var person = {name, es6};

var myFunction = function (object) {
  var {name, es6} = object;
  console.log(name);
  console.log(es6);
};

myFunction(person);
