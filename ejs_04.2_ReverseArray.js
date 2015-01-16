/*function reverseArray(array) {
  var arr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    arr.push(array[i]); 
  }
  return arr;
}

*/

function reverseArray(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    arr.unshift(array[i]); 
  }
  return arr;
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]