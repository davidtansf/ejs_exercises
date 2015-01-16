function range(start, end, step) {
  var arr = [];
  var itr;
  if (arguments.length == 3) {
    itr = Math.abs(step);
  }
  else {itr = 1};
  if (start < end) {
    for (var i = start; i <= end; i += itr) {
      arr.push(i); 
    }
  }
  if (start > end) {
    for (var i = start; i >= end; i -= itr) {
      arr.push(i); 
    }
  }
  return arr;
}

function sum(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}