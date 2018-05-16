var React = require('react');

var CountrySelector = React.createClass({
  render: function () {
    return (
      <select id="countries">
        <option>Country Selector</option>
      </select>
    );
  }
});

module.exports = CountrySelector;
