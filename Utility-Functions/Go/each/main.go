package main

import (
  "reflect"
  "fmt"
)

func main() {
  alpha := "I like to eat pie"

  each(alpha, clog);
}

func each(collection, iterator func(byte)) {
  //  if it's a string
  if reflect.TypeOf(collection).Kind() == reflect.String {
    for characterIndex := 0; characterIndex < len(collection); characterIndex++ {
      currentCharacter := collection[characterIndex]
      iterator(currentCharacter);
    }
  }
}


func clog(val byte){
  fmt.Println(val)
}