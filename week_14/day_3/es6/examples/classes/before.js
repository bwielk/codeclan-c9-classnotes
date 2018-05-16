var Cow = function(name){
  this.name = name;
}

Cow.prototype = {
  moo: function(){
    return "moo";
  }
}

var cow = new Cow();
console.log(cow.moo());