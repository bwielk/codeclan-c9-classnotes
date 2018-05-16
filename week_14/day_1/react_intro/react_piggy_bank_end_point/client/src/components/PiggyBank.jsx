var React = require('react');

var PiggyBank = React.createClass({
  propTypes:{
    title: React.PropTypes.string.isRequired,
    owner: React.PropTypes.string.isRequired,
    depositAmount: React.PropTypes.number.isRequired,
  },
  addToSavings: function(){
    this.setState({ total: this.state.total + this.props.depositAmount });
  },

  withdrawMoney: function(){
    this.setState({ total: this.state.total - this.props.depositAmount });
  },

  getInitialState: function(){
    return {
      total: 0
    }
  },

  render: function(){

    var total = this.state.total.toFixed(2);

    return(
        <div>
          <h1>{this.props.title}</h1>
          <h3>Belongs to: {this.props.owner}</h3>
          <p>Total savings: £{total}</p>
          <button type="button" onClick={this.addToSavings}>Deposit change!</button>
          <button type="button" onClick={this.withdrawMoney}>Buy sweets!</button>
        </div>
    );
  }

});

module.exports = PiggyBank;
