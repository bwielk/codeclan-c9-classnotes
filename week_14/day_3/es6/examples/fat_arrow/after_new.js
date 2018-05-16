const https = require('https');

class CountryFetcher {
  constructor() {
    this.countries = [];
  }

  fetchCountries() {
    var callback  = (response) => {
      console.log(this.countries)
    };

    https
      .get('https://restcountries.eu/rest/v1/all', callback)
      .end();
  }
}

var countryFetcher = new CountryFetcher();
countryFetcher.fetchCountries();