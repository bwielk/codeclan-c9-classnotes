#JS Object TDD Lab
##Learning Objectives
Test drive a JS object

1hr.
30min code along, 30min lab.


[having one object]
Deep equal
##TDD Recap
We are going to create a JS object to represent a water bottle. We are going to take a TDD approach, triggering the error,  then writing the code to make it pass.  To do this we are going to introduce a test framework.

A test framework allow us to define what we expect our program/objects to be able to do.  The framework will then tell us how the object differs from what we expect. We could write this ourselves, but the test framework gives us this out the box.

The TDD approach is to define what we expect it to be doing first, and seeing the test fail.  Then writing the behaviour to make the test pass.  It allows us to focus on writing our programs in small iterative cycles.


##Setup

```
mkdir water_bottle
cd water_bottle
```

```
npm init
```

 Let's install mocha again and add it to our dev dependencies.

```
npm install --save-dev mocha
```

Let's create our test file.  It is convention to call it the name of the file it is testing, plus spec.

```
mkdir specs
```

```
touch specs/water_bottle_spec.js
touch water_bottle.js
```

The mocha framework gives us console commands to run the tests.

```
node node_modules/.bin/mocha specs
```

Good practice to add the test command to our npm script

```
//package.json

"scripts": {
  "test": "mocha specs"
}
```

```
npm test
```
###Stop here and hand out task!!!

Let's first require our water bottle.

```js
//water_bottle_spec.js
var bottle = require('../water_bottle');
```

Let's write the test to check that the water bottle starts off empty.
Mocha has an assert object, which allows us to check if two items are equal.

```js
//water_bottle_spec.js
var bottle = require('../water_bottle');
var assert = require ('assert');

describe('Water Bottle', function() {
  it('should be empty at start', function () {
    assert.equal(0, bottle.volume);
  });
});
```
But we can,  describe is just a function, as is it, and we are passing functions as the second parameters.

Let's test it, and see it fail.

```
npm test
```


And let's make it green.

```js
//water_bottle.js
var waterBottle = {
  volume: 0
}

module.exports = waterBottle;
```


So what did we do here.  We created a water bottle object and gave it a volume attribute.  We then explicitly expose the water bottle using module.exports.

In pairs try and give the bottle the extra functionality.

#Water Bottle Lab
1. water bottle should be empty(X)
2. should go to 100 when filled
3. should go down by 10 when drank
4. should go to 0 when emptied
5. should not be able to go below 0


##Water Bottle Lab Extension
Create an athlete object.

1. Athlete should have a hydration attribute that starts at 100.
2. Athlete should have a distance covered attribute starts at 0.
3. Athlete should be able to run:  increasing distance, decreasing hydration.
4. Athlete should not move when running dehydrated: hydration at 0;
5. Athlete should be able to increase hydration by drinking from water bottle
