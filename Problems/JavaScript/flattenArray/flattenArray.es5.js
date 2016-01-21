"use strict";

// With a recursive subroutine
function flattenArray(array) {
  var flatArray = [];

  function recursiveSubroutine(arr) {
    for (var i = 0; i < arr.length; i++) {
      var element = arr[i];
      if (!Array.isArray(element)) {
        flatArray.push(element);
      }
      recursiveSubroutine(element);
    }
  }

  recursiveSubroutine(array);
  return flatArray;
}

// Without a recursive subroutine
function flattenArray_(array) {
  var flatArray = [];
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (!Array.isArray(element)) {
      flatArray.push(element);
    } else {
      flatArray = flatArray.concat(flattenArray(element));
    }
  }
  return flatArray;
}

// Using reduce
function flattenArray__(array) {
  if (!Array.isArray(array)) {
    return [array]
  } else {
    array.reduce(function(arr, y) {
      arr.concat(flattenArray(y))
    }, []);
  }
}


// testing TODO: WRITE TEST!!!
var test = [1, 2, [3, 4], [5, [6, 7, [8]], 9], 10];

// works
console.log(flattenArray(test));
// doesn't work
console.log(flattenArray_(test));