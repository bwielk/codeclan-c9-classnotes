var React = require('react');

var GenerationSelect = function (props) {
  return (
    <div className='generation-select'>
      <label>Generation: </label>
      <select
      onChange={props.handleGenerationSelected}
      value={props.selectedGeneration}
      >
        {props.generations.map(function (generation, index) {
          return (
            <option key={index} value={generation}>
            {generation}
            </option>
          )
        })}
      </select>
    </div>
  );
};

module.exports = GenerationSelect;
