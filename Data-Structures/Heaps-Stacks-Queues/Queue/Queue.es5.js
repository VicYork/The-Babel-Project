"use strict";

var Queue = function() {
  this._storage = {};
  this._start = 0;
  this._end = 0;
};


Queue.prototype.enqueue = function(value){
  this._storage[this._end++] = value;
};

Queue.prototype.dequeue = function(){
  this.size() && this._start++;
  var result = this._storage[this._start];

  delete this._storage[this._start];

  return result;
};

Queue.prototype.size = function(){
  return this._end - this._start;
};
