var React = require('react');
var GenerationSelect = require('../components/GenerationSelect.jsx');
var PokemonSelect = require('../components/PokemonSelect.jsx');
var PokemonDetail = require('../components/PokemonDetail.jsx');
var Title = require('../components/Title.jsx');

var PokedexContainer = React.createClass({
  render: function () {
    return (
      <div className='pokedex-container'>
        <Title text='Pokedex'/>
        <div className='pokedex'>
          <GenerationSelect
            selectedGeneration={this.state.generation}
            generations={Object.keys(this.props.generationOffsets)}
            handleGenerationSelected={this.handleGenerationSelected}
          />
          <PokemonSelect
            selectedPokemon={this.state.pokemonId}
            pokemonList={this.state.pokemonList}
            handlePokemonSelected={this.handlePokemonSelected}
          />
          <PokemonDetail
          pokemon={this.state.pokemonDetail}
          />
        </div>
      </div>
    );
  },
  getInitialState: function () {
    return {
      generation: 1,
      pokemonId: 25,
      pokemonList: [],
      pokemonDetail: {
          name: 'Pikachu',
          id: 25,
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
          types: ['Electric']
        }
    };
  },
  componentDidMount: function () {
    if (this.state.generation) {
      this.getPokemonList(this.state.generation);
    }
    if (this.state.pokemonId) {
      this.getPokemonDetail(this.state.pokemonId);
    }
  },
  handlePokemonSelected (event) {
    var pokemonId = parseInt(event.target.value);
    this.setState({pokemonId: pokemonId});
    this.getPokemonDetail(pokemonId);
  },
  handleGenerationSelected (event) {
    var generation = parseInt(event.target.value);
    this.setState({generation: generation})
    this.getPokemonList(generation);
  },
  capitalize: function (string) {
    var firstCharacter = string.slice(0, 1).toUpperCase();
    var restOfString = string.slice(1).toLowerCase();
    return firstCharacter + restOfString;
  },
  getPokemonDetail: function (pokemonId) {
    var url = 'http://pokeapi.co/api/v2/pokemon/' + pokemonId;
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function () {
      if (request.status === 200) {
        var jsonData = request.responseText;
        var pokemon = JSON.parse(jsonData);
        var pokemonDetail = {
          name: this.capitalize(pokemon.name),
          id: pokemon.id,
          image: pokemon.sprites.front_default,
          types: []
        };
        pokemonDetail.types = pokemon.types.map(function (typeObject) {
          return this.capitalize(typeObject.type.name);
        }.bind(this));
        this.setState({pokemonDetail: pokemonDetail});
      }
    }.bind(this);
    request.send(null);
  },
  getPokemonList: function (generation) {
    var generationOffset = this.props.generationOffsets[generation];
    var limit = generationOffset.limit;
    var offset = generationOffset.offset;
    var url = 'http://pokeapi.co/api/v2/pokemon/?limit=' + limit + '&offset=' + offset;
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if (request.status === 200) {
        var jsonData = request.responseText;
        var pokedexData = JSON.parse(jsonData);
        var pokemonList = pokedexData.results;
        pokemonList.forEach(function (pokemon, index) {
          pokemon.id = (offset + 1) + index;
          pokemon.name = this.capitalize(pokemon.name);
        }.bind(this));
        this.setState({pokemonList: pokemonList});
      }
    }
    request.send(null);
  }
});

module.exports = PokedexContainer;
