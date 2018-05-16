var React = require('react');

var PokemonSelect = function (props) {
  return (
    <div className='pokemon-select'>
      <label>Pokemon: </label>
      <select
      value={props.selectedPokemon}
      onChange={props.handlePokemonSelected}
      >
        {props.pokemonList.map(function (pokemon) {
          return (<option value={pokemon.id} key={pokemon.id}>
            {pokemon.name}
          </option>)
        })}
      </select>
    </div>
  );
};

module.exports = PokemonSelect;
