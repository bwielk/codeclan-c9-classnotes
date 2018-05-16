var presenters = [ 'Jeremy C', 'Richard H', 'James M' ]

var buildPresentersString = function(presenter1, presenter2, presenter3) {
  return 'A car show presented by ' + presenter1 + ', ' + presenter2 + ' and ' + presenter3;
}

var presentedString = buildPresentersString(...presenters);

console.log(presentedString);

var sum = function(...numbers) {
  return numbers.reduce((curr, prev) => {
    return curr + prev;
  });
}

console.log(sum(1,2,3));
console.log(sum(1,2,3,4));