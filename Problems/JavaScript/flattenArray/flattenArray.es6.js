"use strict";

const flatten = x => !Array.isArray(x) ? [x] : x.reduce((arr, y) => arr.concat(flatten(y)), [])