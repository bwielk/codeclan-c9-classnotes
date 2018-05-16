#JS 'this'

##Learning Objectives

- Better understand 'this' in the 3 contexts. functions, objects, constructors

'this' inside a function depends on how the function is invoked. 

1. 'this' is the global object in a function invocation. I.E the window in the browser or the process object in Node.

Let's check this out.

```js
function add(a, b) {  
  console.log(this); // window object
  this.myNumber = 20; // add 'myNumber' property to global object
  return a + b;
}

// add() is invoked as a function
// this in add() is a global object (window)

add(5, 3);     // 8
window.myNumber; // 20  
```

2. 'this' is the object that owns the method in a method invocation

Let's check this out.

```js
var car = {
  
  speed: 0,
  
  accelerate: function() {
    console.log(this); // car
    this.speed += 10;
  },

  decelerate: function() {
    this.speed -= 10;
  }
};

car.accelerate();
```

Calling car.accelerate() will make the context of 'this' inside accelerate, the 'car' object.


3. 'this' is the object created by the 'new' keyword using a Constructor

```js
function Animal(type, legs) {  
  this.type = type;
  this.legs = legs;  
  this.logInfo = function() {
    console.log(this === myCat); // => true
    console.log('The ' + this.type + ' has ' + this.legs + ' legs');
  }
}
var myCat = new Animal('Cat', 4);  
myCat.logInfo();
```

However, if we were to pass the logInfo function to a setTimeout function for example, what would 'this' be inside the logInfo function?

```js
setTimeout(myCat.logInfo, 1000); 
```

SOLUTION: 'this' will be the global object (so .type and .legs are undefined). The logInfo function has been separated from the object and is just a function floating around globally.

To fix it, we could tell the function what 'this' should be! We can bind an object to the function.

```js
setTimeout(myCat.logInfo.bind(myCat), 1000);
```