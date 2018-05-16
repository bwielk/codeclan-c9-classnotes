var myPerson = {
  name: 'Guybrush',
  age: 32,
  weapon: 'sword',
  talk: function() {
    console.log( 'shiver me timbers Im alive, watch out for my ' + this.weapon );
  }
};

console.log('person name', myPerson['name']);
console.log('person age', myPerson.age);

myPerson.weapon = 'sword';
myPerson.age = '52';

console.log('my person', myPerson);

myPerson.talk();
