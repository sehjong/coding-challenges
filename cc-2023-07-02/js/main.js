// PREP

// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

// P: an array of arrays of numbers and strings
// R: a flattened array
// E: flatten([1,2,3]) // => [1,2,3]
//    flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
//    flatten([[[1,2,3]]]) // => [[1,2,3]]
// P:

// create a function expression that takes in an array of arrays of numbers and strings
const flatten = (array) => {
    [].concat(...array);
}