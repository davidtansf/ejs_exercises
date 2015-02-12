function every(array, test) {
  for (var i = 0; i < array.length; i++) {
    if (!test(array[i]))
      return false;
  }  
  return true;
}

function some(array, test) {
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      return true;
  }  
  return false;
}

console.log(every([NaN, NaN, NaN], isNaN)); // → true
console.log(every([NaN, NaN, 4], isNaN)); // → false
console.log(some([NaN, 3, 4], isNaN)); // → true
console.log(some([2, 3, 4], isNaN)); // → false

console.log([NaN, NaN, NaN].every(function(p) {
  return isNaN(p);}));
console.log([NaN, NaN, 4].every(function(p) {
  return isNaN(p);}));
console.log([NaN, 3, 4].some(function(p) {
  return isNaN(p);}));
console.log([2, 3, 4].some(function(p) {
  return isNaN(p);}));