var React = require('react');

var CountrySelector = React.createClass({
  getInitialState: function () {
    return { selectedIndex: undefined };
  },
  render: function () {
    var options = this.props.countries.map(function (country, index) {
      return (<option value={index} key={index}>{country.name}</option>);
    });
    return (
      <select
      id="countries"
      value={this.state.selectedIndex}
      onChange={this.handleChange}
      >
        {options}
      </select>
    );
  },
  handleChange: function (event) {
    var newIndex = parseInt(event.target.value);
    this.setState({selectedIndex: newIndex});
    var country = this.props.countries[newIndex];
    this.props.selectCountry(country);
  }
});

module.exports = CountrySelector;
