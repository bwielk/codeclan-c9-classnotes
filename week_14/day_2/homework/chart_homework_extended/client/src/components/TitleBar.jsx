var React = require('react');

var TitleBar = function (props) {
  return (
    <div>
      <h2>UK Top 20 Songs</h2>
      <select onChange={props.handleSelectChange}>
        <option
          value={props.allSongsUrl}
        >All Songs</option>
        <option
          value='https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json'
        >Rock</option>
        <option
          value='https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json'
        >Dance</option>
        <option
          value='https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json'
        >Country</option>
      </select>
    </div>
  );
};

module.exports = TitleBar;
