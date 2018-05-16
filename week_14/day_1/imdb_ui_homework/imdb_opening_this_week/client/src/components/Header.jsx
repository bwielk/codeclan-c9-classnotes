var React = require('react')

var Header = function(props){
  return (
    <div className='header'>
      {props.title}
    </div>
  )
}

Header.propTypes = { title: React.PropTypes.string.isRequired }

module.exports = Header
