var presenters = [ 'Jeremy C', 'Richard H', 'James M' ]

var buildPresentersString = function(presenter1, presenter2, presenter3) {
  return 'A car show presented by ' + presenter1 + ', ' + presenter2 + ' and ' + presenter3;
}

var presentedString = buildPresentersString(presenters[0], presenters[1], presenters[2]);

console.log(presentedString);

var sum = function(arg1, arg2, arg3) {
  return arg1 + arg2 + arg3;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));