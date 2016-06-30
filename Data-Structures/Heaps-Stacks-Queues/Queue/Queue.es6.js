"use strict";

class Queue {

  constructor() {
    this._storage = {};
    this._start = 0;
    this._end = 0;
  }

  enqueue(value) {
    this._storage[this._end++] = value;
  }

  dequeue() {
    this.size() && this._start++;
    var result = this._storage[this._start];

    delete this._storage[this._start];

    return result;
  }

  size() {
    return this._end - this._start;
  }
}
