"use strict";
/**
 * Stack as a Class in ES 2015 (ES 6)
 */

class Stack {
  constructor() {
    this._storage = {};
    this._size = 0;
  }

  push(value) {
    this._storage[this._size] = value;
    this._size++;
  }

  pop() {
    this._size && this._size--;
    var result = this._storage[this._size];

    delete this._storage[this._size];

    return result;
  }

  size() {
    return this._size;
  }
}
