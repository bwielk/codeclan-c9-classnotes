var Enumeration = function() {}

Enumeration.prototype = {

  // your code here!

  find: function(array, callback) {
    for (var object of array) {
      if (callback(object)) {
        return object;
      }
    }
  },

  map: function(array, callback) {
    var newArray = [];
    for (var object of array) {
      newArray.push(callback(object));
    }
    return newArray;
  },

  filter: function(array, callback) {
    var filteredArray = [];
    for (var object of array) {
      if (callback(object)) {
        filteredArray.push(object);
      }
    }
    return filteredArray;
  },

  some: function(array, callback) {
    var result = false;
    for (var object of array) {
      if (callback(object)) {
        result = true
      }
    }
    return result;
  },

  every: function(array, callback) {
    var resultArray = [];
    for (var object of array) {
      if(callback(object)) {
        resultArray.push(object);
      } 
    }
    if (resultArray.length === array.length){
      return true 
    } else {
      return false
    }

  },

  reduce: function(array, callback) {
    var total = 0;
    for (var object of array) {
      total = callback(total, object)
    }
    return total;
  }



}

module.exports = Enumeration;