var React = require('react');
var ReactDOM = require('react-dom');
var CommentContainer = require('./components/CommentContainer.jsx')

window.onload = function(){
  ReactDOM.render(
    <CommentContainer />,
    document.getElementById('app')
  );
}
