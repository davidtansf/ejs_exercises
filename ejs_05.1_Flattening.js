var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(a,b) {
  return a.concat(b);
}));

/* using nested loops (old way)

var arrayA = [[1, 2, 3], [4, 5], [6]];

function flatten(array) {
  var newarr = [];
  for(var i = 0; i < array.length; i++) {
    for(var j = 0; j < array[i].length; j++) {
      newarr.push(array[i][j]);
    }
  }
  return newarr;
}
console.log(flatten(arrayA));

*/

/* 

function reduce(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++) {
    current = combine(current, array[i]);
  }
  return current;
}

console.log(reduce([[1, 2, 3], [4, 5], [6]], function(a, b) {
  return a.concat(b);
}, []));

*/