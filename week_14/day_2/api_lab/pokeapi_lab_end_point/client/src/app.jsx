var React = require('react');
var ReactDOM = require('react-dom');
var PokedexContainer = require('./containers/PokedexContainer.jsx');

window.onload = function () {
  const generationOffsets = {
    1: {limit: 151, offset: 0},
    2: {limit: 100, offset: 151},
    3: {limit: 135, offset: 251},
    4: {limit: 107, offset: 386},
    5: {limit: 156, offset: 493},
    6: {limit: 72, offset: 649}
  }
  ReactDOM.render(
    <PokedexContainer generationOffsets={generationOffsets} />,
    document.getElementById('app')
  );
};
