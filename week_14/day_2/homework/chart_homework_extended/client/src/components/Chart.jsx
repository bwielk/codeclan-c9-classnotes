var React = require('react');
var Song = require('./Song.jsx');

var Chart = function (props) {
  if (props.songs == null || props.songs.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <div>
    {props.songs.map(function (song, index) {
      return (
        <Song 
          key={index}
          position={index + 1}
          title={song['im:name'].label}
          artist={song['im:artist'].label}
          image={song['im:image'][1].label}
          audio={song.link[1].attributes.href}
          handlePlayPause={props.handlePlayPause}
        />
      )
    })}
    </div>
  );
};

module.exports = Chart;
