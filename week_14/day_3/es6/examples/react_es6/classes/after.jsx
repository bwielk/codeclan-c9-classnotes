var React = require('react')

class ReactComponent extends React.Component {
  constructor(props){
    super(props);

    //Get initial state ditched in favour of using constructors in es6.
    this.state = {
      message: Hello
    };
  }

  render(){
      return(
        <div>{this.state.message}</div>
      );
  }
}

module.exports = ReactComponent;
