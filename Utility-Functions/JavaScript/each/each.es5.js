function Each(collection, iterator) {
  // Error handling
  /**
   * TODO: make error handling check less verbose
   */
  if (collection === null || collection === undefined || collection === 'boolean' || typeof collection === 'number' || typeof collection === 'symbol' || collection instanceof Date) {
    throw Error;
    // Iterate over function methods
  } else if (typeof collection === 'function') {
    /**
     * TODO: Implement iteration over public function/class methods
     */
    // Iterate over strings
  } else if (typeof collection === 'string') {
    for (var characterIndex = 0; characterIndex < collection.length; characterIndex++) {
      var character = collection[characterIndex];
      iterator(character, characterIndex, collection);
    }
    // Iterate over arrays
  } else if (Array.isArray(collection) && typeof collection !== 'string') {
    for (var elementIndex = 0; elementIndex < collection.length; elementIndex++) {
      var element = collection[elementIndex];
      iterator(element, elementIndex, collection);
    }
    // Iterate over objects
  } else {
    for (var key in collection) {
      var value = collection[key];
      iterator(value, key, collection);
    }
  }
}
