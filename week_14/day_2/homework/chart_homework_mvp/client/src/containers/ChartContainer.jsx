var React = require('react');
var Chart = require('../components/Chart.jsx');

var ChartContainer = React.createClass({
  getInitialState: function () {
    return { songs: [] };
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
    }.bind(this);
    request.send(null);
  },

  componentDidMount: function () {
    this.loadSongs(this.props.url);
  },

  render: function () {
    if(!this.state.songs){ return <p>Loading...</p> }
    return (
      <Chart
      songs={this.state.songs}
      />
    );
  }

});

module.exports = ChartContainer;
