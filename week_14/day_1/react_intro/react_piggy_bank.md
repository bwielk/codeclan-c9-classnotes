#Piggy Bank Application

##Learning Objectives
- Create a single component application
- Introduction to props and state
- Install the React Dev Tools and learn how they can be useful

##Creating the Piggy Bank Component
We want a simple piggy bank application to get to learn the syntax of React. We want to be able to put money in, take money out, and see the total.

It will contain a single piggy bank component that will display a savings total.  We will then add a 'deposit' button that will update the state of the component, updating the total.

A component's role is to display a section of our user interface.  Good React applications have many small components each doing one job, much like good OO programs.

> Hand out react_startpoint

Let's install and start our app:

```
#terminal

//top level
npm install
npm start

//client
npm install
npm start
```

```
#terminal
  cd client/src
  mkdir components
  cd components
  touch PiggyBank.jsx
```

To create our components we use the React.createClass function. This takes an object as an argument which contains methods that the component will invoke. 

The main one which we must always include is a ***render*** method. This returns a single element to be rendered to the page. You may nest multiple elements in the render but they must always be wrapped inside a single containing element.

```
//client/src/components/PiggyBank.jsx

  var React = require('react');
  var PiggyBank = React.createClass({
    render: function() {
      return (
        <div className="bank-box">
          Hello, world! I am a Piggy Bank.
        </div>
      );
    }
  });

  module.exports = PiggyBank;
```

Remember to module.exports so we can require it elsewhere!

```js
  //client/src/app.js

  var React = require('react');
  var ReactDOM = require('react-dom');
  var PiggyBank = require('./components/PiggyBank.jsx');

  window.onload = function(){
    ReactDOM.render(
      <PiggyBank />,
      document.getElementById('app')
    );
  }
```

Components have attributes that they can display.  There are two types of attributes.

##Properties
Properties are attributes that are given to a component that can not change. They are immutable.  They just render it.  Let's give the piggy bank a title component that it can display.

We pass in properties to JSX like we set attributes on an HTML component. These can be in quotes to pass in a string, or in curly braces {} to pass in other JavaScript data types or objects. (Can show this transpiled by Babel to show what's happening). Note: all JSX tags must be closed, either with a separate closing tag or self-closed.

```js
//client/src/app.js

  window.onload = function(){
    ReactDOM.render(
      <PiggyBank title="Beth's Savings Pig" />,
      document.getElementById('app')
    );
  }
```

Our component has use of its properties through its props attribute,  this.props.
Let's use it to show our title.

```js
//client/src/components/PiggyBank.jsx

  var PiggyBank = React.createClass({
    render: function(){
      return(
          <div className="bank-box">
            <h1>{this.props.title}</h1>
          </div>
      );
    }

  });

```

##Prop Validation
Currently we can pass anything as the title property.  This is fine,  but often as our app grows it's helpful to ensure that our components are used correctly.  Validating the props that are passed to the component can help in this.

```
//client/src/components/PiggyBank.jsx

var PiggyBank = React.createClass({
  propTypes:{
    title: React.PropTypes.string,
  },
```

React will give us a warning if it has a different type. Note that it still works but the warning are very helpful.

> show this warning in the JS console in the browswer

```
//client/src/app.js
  
  <PiggyBank title={4} />,
```

We can also state that the title is required:

```
//client/src/app.js

var PiggyBank = React.createClass({
  propTypes:{
    title: React.PropTypes.string.isRequired,
  },
```

It will warn us when the prop is not passed in correctly.

```js
//client/src/app.js

  <PiggyBank />,
```

More info on prop validation:
https://facebook.github.io/react/docs/reusable-components.html

##State - Displaying a total

Now we want our bank to display a total.  Props are something that are given to us by a parent that we can't change.  We need something that belongs to the component that it can change. 

State is something that the component is in control of. It generally isn't passed down from a parent,  it is something the component sets up itself.

Let's set up our initial state. We create a method called getInitialState to do this, which returns an object with various properties that make up our app's state. This method is one of React's own methods and is called just one time, before the initial render of the component.

We want a total property that starts at zero. We can then display this. 

```
//client/src/components/PiggyBank.jsx

var PiggyBank = React.createClass({
  getInitialState: function(){
    return { total: 0 }
  },

  render: function(){

    return(
        <div>
          <h1>{this.props.title}</h1>
          <p>Total savings: £{this.state.total}</p>
        </div>
    );
  }

});

```

##Changing state.

Now we want to add a button that will increase the total when we deposit money into the piggy bank.

Clicking on the button will update the state of our application. We will use the this.setState() method to update the state. 

When updating the state of a component, if its value changes, React will re-render the application!

Seems a bit inefficient but remember the virtual DOM!  React will only update the DOM elements that have changed, keeping it quick.

```js
//client/src/components/PiggyBank.jsx

var PiggyBank = React.createClass({
  addToSavings: function(){
    this.setState({
      total: this.state.total + 1
    })
  },

  getInitialState: function(){
    return {
      total: 0,
    }
  },

  render: function(){

    return(
        <div>
          <h1>{this.props.title}</h1>
          <p>Total savings: £{this.state.total}</p>
          <button type="button" onClick={this.addToSavings}>Deposit change!</button>
        </div>
    );
  }

});

```

#Chrome Dev Tools
An other advantage of React is that there are powerful development tools in chrome.
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

We can see the state and properties of all of our components at any point in time.

We have a dynamically updating single component react application. 
We have seen properties and state on a component and how setting the state forces the application to re-render. 
Next we will see an application with multiple components that will increase our understanding of the one-way flow.

##Tasks:
- Add an owner property to the piggy bank
- Add a 'withdraw' button which decreases the total.
- Add a depositAmount property - pass in a value which depositing or withdrawing will change the total by.
