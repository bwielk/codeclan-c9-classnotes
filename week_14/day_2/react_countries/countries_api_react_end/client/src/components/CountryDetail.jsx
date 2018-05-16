var React = require('react');

var CountryDetail = function (props) {
  if (!props.country) {
    return <h4>No country selected</h4>
  }
  return (
    <div className='country-detail'>
      <h4>{props.country.name}</h4>
      <p>Population: {props.country.population}</p>
    </div>
  );
};

module.exports = CountryDetail;
