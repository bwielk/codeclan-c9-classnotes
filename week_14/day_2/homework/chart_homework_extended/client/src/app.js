var React = require('react');
var ReactDOM = require('react-dom');
var ChartContainer = require('./containers/ChartContainer.jsx')

window.onload = function(){
  ReactDOM.render(
    <ChartContainer url='https://itunes.apple.com/gb/rss/topsongs/limit=20/json' />,
    document.getElementById('app')
  );
}
