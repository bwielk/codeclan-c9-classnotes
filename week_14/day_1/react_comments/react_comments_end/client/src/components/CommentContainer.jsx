var React = require('react');
var CommentList = require('./CommentList.jsx')

var sampleData = [
  {id: 1, author: "Matthew", text: "Go away!"},
  {id: 2, author: "Crig Mortob", text: "Footlights?"},
  {id: 3, text: "Footlights????"}
];

var CommentContainer = React.createClass({
  getInitialState: function () {
    return { data: sampleData }
  },
  render: function () {
    return (
      <div className="comment-container">
        <CommentList comments={this.state.data} />
      </div>
    );
  }
});

module.exports = CommentContainer;
