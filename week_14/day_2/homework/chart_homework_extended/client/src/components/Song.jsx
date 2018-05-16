var React = require('react');

var Song = function (props) {
  return (
    <div>
      <img
      id={props.position}
      className='audio-control'
      src='https://image.freepik.com/free-icon/play-button_318-42541.jpg'
      onClick={props.handlePlayPause}
      />
      <img src={props.image} />
      <div className='details'>
        <h3>{props.position}. {props.title}</h3>
        <h4>{props.artist}</h4>
      </div>
      <audio id={'audio' + props.position} src={props.audio}>
      </audio>
    </div>
  );
};

module.exports = Song;
