var React = require('react');

var InfoDisplay = function ({
  title,
  description,
  imageUrl,
  websiteUrl
}) {
  // This is the same as:
  // var {title, description, imageUrl, websiteUrl} = props;
  // Which is the same as: (without object key-value shorthand)
  // var {title: title, description: description, imageUrl: imageUrl, websiteUrl: websiteUrl} = props;
  // We want to create a variable called 'title', and the key in the props object we want to store in that variable is also called 'title' so we can use the shorthand.
  return (
    <div className='info-display'>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={imageUrl} alt={title}/>
      <a href={websiteUrl} />
    </div>
  );
}


module.exports = InfoDisplay;
