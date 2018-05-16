var [ first, second ] = [ 1, 2, 3, 4 ];
console.log(first, second);

var [ first, , third, fourth ] = [ 1, 2, 3, 4 ];
console.log(first, third, fourth);

const obj = {first: 'Jane', last: 'doe'};
const {first: f, last: l} = obj;

console.log(f,l);

const obj2 = {first: 'John', last: 'smith'};

var method = ({first, last}) => {
  console.log(first, last);
}

method(obj2);

