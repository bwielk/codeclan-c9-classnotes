var React = require('react')

var MovieRow = function(props){
  return (
    <div className='movie-row'>
      <a href={props.movie.url}>{props.movie.name}</a>
    </div>
  )
}

MovieRow.propTypes = {
  movie: React.PropTypes.object.isRequired
}

module.exports = MovieRow;
