package main
import (
  "fmt"
  "reflect"
)

func main() {
}

/* takes in an array, returns an array */
func flattenArray(array types.Array) types.Array {
  //  var flatArray = []types.Slice;
  //  for i := 0; i < len(array); i++ {
  //    var element := array[i];
  //    if types.NewChecker(element) != array {
  //      flatArray.push(element);
  //    } else {
  //      flatArray = flatArray.concat(flattenArray(element));
  //    }
  //  }
  //
  //  return flatArray;

  length := 0;

  for i := 0; i < len(array); i++ {
    element := array[i];

    if element != types.Array {
      length++;
    } else {
      for j := 0; j < len(element); j++ {
        _element := element[j];
        if _element != types.Array {
          length++
        }
      }
    }
  }

  flatArray := [length]int;

  return flatArray;
}