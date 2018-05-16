var React = require('react');
var ReactDOM = require('react-dom');
var PiggyBank = require('./components/PiggyBank.jsx');

window.onload = function(){
  ReactDOM.render(
    <PiggyBank title="Beth's Money Pig" owner="Beth F" depositAmount={0.5} />,
    document.getElementById('app')
  );
}
