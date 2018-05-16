var React = require('react');
var CountrySelector = require('../components/CountrySelector');
var CountryDetail = require('../components/CountryDetail');

var CountryContainer = React.createClass({
  getInitialState: function () {
    return { };
  },
  render: function () {
    return (
      <div>
        <h2>Country Container</h2>
        <CountrySelector />
        <CountryDetail />
      </div>
    );
  }
});

module.exports = CountryContainer;
