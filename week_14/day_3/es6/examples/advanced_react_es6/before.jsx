var React = require('react');

var InfoDisplay = function (props) {
  return (
    <div className='info-display'>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <img src={props.imageUrl} alt={props.title}/>
      <a href={props.websiteUrl} />
    </div>
  )
};

module.exports = InfoDisplay;
