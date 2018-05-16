var React = require('react');

var ReactComponent = React.createClass({
  getInitialState: function() {
    return {
      message: "Hello"
    }
  },
  render: function(){
      return(
        <div>{this.state.message}</div>
      );
  }
});

module.exports = ReactComponent;