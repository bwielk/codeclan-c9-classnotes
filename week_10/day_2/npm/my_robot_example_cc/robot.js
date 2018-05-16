_ = require('lodash');
var robot = {
  bestFriend: 'jay',
  welcome:function() {
    return "Hello " + _.capitalize(this.bestFriend);
  }
};

module.exports = robot;
