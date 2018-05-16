class Cow{
  constructor(name){
    this.name = name;
  }

  moo(){
    return "moo";
  }
}

var cow = new Cow();
console.log(cow.moo());