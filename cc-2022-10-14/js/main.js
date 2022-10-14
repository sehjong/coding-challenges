// PREP

// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

// Example:

// keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
// Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?

// P: object, properties and values, key value pairs, strings and numbers
// R: the keys and values as separate arrays
// E: keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
// P:

// create a function that takes in an object of key value pairs
function keysAndValues(data) {
    return [Object.keys(data), Object.values(data)];
}