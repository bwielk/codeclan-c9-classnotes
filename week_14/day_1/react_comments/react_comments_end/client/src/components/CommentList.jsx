var React = require('react');
var Comment = require('./Comment.jsx')

var CommentList = React.createClass({
  propTypes: {
    comments: React.PropTypes.array.isRequired
  },
  render: function () {
    var commentNodes = this.props.comments.map(function (comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      )
    })
    return (
      <div className="comment-list">
        { commentNodes }
      </div>
    )
  }
});

module.exports = CommentList;
