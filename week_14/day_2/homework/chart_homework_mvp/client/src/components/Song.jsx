var React = require('react');

var Song = function (props) {
  return (
    <div>
      <img src={props.image}/>
      <div className='details'>
        <h3>{props.position}. {props.title}</h3>
        <h4>{props.artist}</h4>
     </div>
    </div>
  );
};

module.exports = Song;
