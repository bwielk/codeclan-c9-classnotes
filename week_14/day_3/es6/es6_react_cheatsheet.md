###Common issues:

####Import/Export
If exporting using ES6 syntax, don't forget to update your index.js to use import. 

```
var Example = require('./example.jsx')

becomes

import Example from './example.jsx'
```

####Get initial state

getInitialState is deprecated in ES6 in favour of creating the state in the constructor. Remember to call super(props) first.

```
  constructor(props) {
    super(props);
    this.state = {};
  }
```

####This.setState undefined in Callback

Remember to bind your variable in constructor or jsx. 

```
  constructor(props) {
    super(props);
    this.state = {};

    this.callback = this.callback.bind(this);
  }
```

###Sample React File from ES5 to ES6. 

Before
```
var React = require('react');

var Example = React.createClass({
  handleClick: function(event) {    
    this.setState({message: ' loading '});

    var url = "https://restcountries.eu/rest/v1/all";

    var request = new XMLHttpRequest();

    request.open("GET", url);
    //Have to bind this so we can setState
    request.onload = function(){
        this.setState({message: ' loaded'});
    }.bind(this);

    request.send();
  },
  getInitialState: function() {
    return {
      message: " click to load "
    }
  },
  render: function(){
    return(
      <div>
        <button onClick={this.handleClick} >Click</button>
        {this.state.message}
      </div>
    );
  }
});

module.exports = Example;
```

After:
Note, getInitialState is deprecated in favour of using constructors in es6.
```
import React from 'react'

class Example extends React.Component {
  
  constructor(props){
    super(props)
    
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      message: " click to load"
    };
  }

  //When using ES6 classes, you should remember to bind this in the constructor.
  handleClick(event) {
    this.setState({message: ' loading '});

    var url = "https://restcountries.eu/rest/v1/all";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = () => {
        //Because of the arrow operator this refers to the Example class not the XML object.
        //No more binds. YAY!
        this.setState({message: ' loaded '});
    };
    request.send();
  }

  render(){
      return(
        <div>
            <button onClick={this.handleClick} >Click</button>
            {this.state.message}
        </div>
      );
  }
}

export default Example;
```

