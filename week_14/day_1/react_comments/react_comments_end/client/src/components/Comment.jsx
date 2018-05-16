var React = require('react');

var Comment = React.createClass({
  propTypes: {
    author: React.PropTypes.string,
    children: React.PropTypes.node.isRequired
  },
  render: function () {
    return (
      <div className="comment">
        <h4>{this.props.author || "Anonymous"}</h4>
        <p>{this.props.children}</p>
      </div>
    );
  }
});

module.exports = Comment;
