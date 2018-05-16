var arr = [ 1, 2, 3, 4 ];
var first = arr[0];
var second = arr[1];

console.log(first, second);

var third = arr[2];
var fourth = arr[3];
console.log(first, third, fourth);

var obj = {first: 'Jane', last: 'Doe'};
var f = obj.first;
var l = obj.last;
console.log(f, l);

var obj = {first: 'John', last: 'smith'};
var first = obj.first;
var last = obj.last;

var method = function(first, last) {
  console.log(first,last);
}

method(first,last);
