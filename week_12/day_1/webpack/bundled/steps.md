

## Install Webpack and add config file
- npm install --save-dev webpack
- touch /client/webpack.config.js
```js
config = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: "./build"
  },
  devtool: 'source-map'
}

module.exports = config;
```
entry: the main start point that webpack will start to look for dependencies
output: the folder that webpack will place the final bundled file into
devtool: creates a source map so we can see the unminified version on devtools

- navigate to client and run webpack -w
This runs a watch on our files and recompiles the bundle everytime we make a change!

## Let's get our tests back!

- mkdir /client/models/specs
- touch /client/models/specs/film_spec.js
- Give this out in Slack
```js
//film_spec.js
var Film = require('../film');
var assert = require('assert');

describe('Film', function () {
  var film;

  beforeEach(function () {
    film = new Film({
      title: "Titanic",
      genres: ["Drama"]
    });
  });

  it('should have title titanic', function () {
    assert.equal(film.title, "Titanic");
  });

})
```
- npm install --save-dev mocha
- run mocha film_spec.js from the same folder
- add script to package.json
```js
"scripts": {
  "test": "mocha client/src/models/specs"
},
```





