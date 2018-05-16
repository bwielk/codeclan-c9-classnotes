var React = require('react')
var MovieRow = require('./MovieRow')

var MovieTable = function (props){

  var movieNodes = props.movies.map(function(movie, index) {
    return (
      <li key={index}>
        <MovieRow movie={movie} key={index}/>
      </li>
    )
  })

  return(
    <div className='movie-table'>
      <ul>
        {movieNodes}
      </ul>
    </div>
  )
}

var PropTypes = React.PropTypes
MovieTable.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired
}

module.exports = MovieTable
