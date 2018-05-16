#JS Objects

##Learning Objectives
- Create an object/hash
- Assign object to a variable
- Get an attribute for an object; using ., using []
- Add an attribute to an object
- Change attributes

- 1hr

##Objects

What Javascript calls "objects" are similar to Ruby's "hashes", Java's "HashTables" or, in a language-agnostic context, you may hear this kind of idea called a "dictionary" or simply "key-value pairs"

We can think of a JS object as a bunch of balloons.  Each balloon having a key(label), giving a label for what is contained inside the balloon (the value).  Let's see an example.


```
touch object_play.js
```
We create an object using the curly bracket syntax.  Each attribute is written as a key value pair,  with the syntax
key: value. All keys in JS are strings.

```js
var myPerson = {
  name: 'Guybrush',
  age: 32,
  weapon: 'cutlass'
};

console.log('my person', myPerson);
```

We have created an object that has state; a name and an age.
We can then access attributes using square bracket syntax....

```js
console.log('person name', myPerson['name']);
```

... also access attributes using . notation.

```js
console.log('person age', myPerson.age);
```

Because the properties of an object are stored as a string, we can use the square bracket notation with an expression that will evaluate to a string.

```js
var propertyName = 'weapon';
console.log(myPerson[propertyName]);
```

We can also add attributes using either of these notations.  Let's
see it using the dot notation.

```js
myPerson.pet = 'parrot';
```

We can also change attributes

```js
myPerson.age = 52;
```

##Methods

We don't just have to store primitives in objects. 

We can store methods or even another object!

```js
var myPerson = {
  name: 'Guybrush',
  age: 32,
  weapon: 'cutlass',
  address: {street: "Pirate Way", postcode: "EH1 4AL"}
};

console.log('my person', myPerson);

```

As you'd expect we can store objects in an array.

```js
var caesar = {
  city: "Rome"
};

var cleopatra = {
  city: "Cairo"
};

var cicero = {
  city: "Rome"
};

var historyLesson = [caesar, cleopatra, cicero];
console.log(historyLesson);
```



