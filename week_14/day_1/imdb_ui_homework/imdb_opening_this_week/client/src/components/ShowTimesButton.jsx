var React = require('react')

var ShowTimesButton = function(props){

    return(
      <div className='show-times'>
        <button className='btn-show-times' onClick={props.handleClick}>Get Show Times >></button>
      </div>
    )
}

ShowTimesButton.propTypes = {
  handleClick: React.PropTypes.func
}

module.exports = ShowTimesButton
