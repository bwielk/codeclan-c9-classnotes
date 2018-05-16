const presenters = [ "Jeremy C", "Richard H", "James M" ]

const buildPresentersString = function(presenter1, presenter2, presenter3) {
  return `A car show presented by ${presenter1}, ${presenter2} and ${presenter3}`;
}

const presentedString = buildPresentersString(presenters[0], presenters[1], presenters[2]);

console.log(presentedString);

const mathString = `1 + 1 = ${1+1}`;

console.log(mathString);  


