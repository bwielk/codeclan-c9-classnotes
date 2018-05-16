var React = require('react');
var CountrySelector = require('../components/CountrySelector');
var CountryDetail = require('../components/CountryDetail');

var CountryContainer = React.createClass({
  getInitialState: function () {
    return {
      countries: [],
      focusCountry: null
    };
  },
  componentDidMount: function () {
    var url = 'https://restcountries.eu/rest/v1/all';
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function () {
      var data = JSON.parse(request.responseText);
      this.setState({
        countries: data,
        focusCountry: data[0]
      });
    }.bind(this);
    request.send(null);
  },
  render: function () {
    return (
      <div>
        <h2>Country Container</h2>
        <CountrySelector
        countries={this.state.countries}
        selectCountry={this.setFocusCountry}
        />
        <CountryDetail country={this.state.focusCountry}/>
      </div>
    );
  },
  setFocusCountry: function (country) {
    this.setState({ focusCountry: country})
  }
});

module.exports = CountryContainer;
