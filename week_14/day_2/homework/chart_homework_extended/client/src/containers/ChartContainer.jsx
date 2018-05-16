var React = require('react');
var Chart = require('../components/Chart.jsx');
var TitleBar = require('../components/TitleBar.jsx');

var ChartContainer = React.createClass({
  getInitialState: function () {
    return { songs: [] }
  },

  componentDidMount: function () {
    this.loadSongs(this.props.url)
  },

  loadSongs: function (url) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function () {
      if (request.status === 200) {
        var jsonString = request.responseText;
        var songsList = JSON.parse(jsonString);
        this.setState({songs: songsList.feed.entry});
      }
    }.bind(this)
    request.send(null);
  },

  handlePlayPause: function (event) {
    var audio = document.querySelector('#audio' + event.target.id);
    audio.paused ? audio.play() : audio.pause();
    event.target.classList.toggle('playing');
  },

  handleSelectChange: function (event) {
    this.loadSongs(event.target.value);
  },

  render: function () {
    return (
      <div>
        <TitleBar
        handleSelectChange={this.handleSelectChange}
        allSongsUrl={this.props.url}
        />
        <Chart
          songs={this.state.songs}
          url={this.props.url}
          handleSelectChange={this.handleSelectChange}
          handlePlayPause={this.handlePlayPause}
        />
      </div>
    )
  }
});

module.exports = ChartContainer;
