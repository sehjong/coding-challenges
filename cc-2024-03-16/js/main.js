// PREP

// Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.

// P: an array of strings
// R: an array with the elements sorted in lexicographical order
// E: console.log(arrSort(['one', 'two', 'three']), ['one', 'three', 'two']);
// P:

// create a function expression that takes in an array of strings
// use the .sort() method to sort the array in lexicographical order and implicitly return the sorted array
const arrSort = strArr => strArr.sort();

console.log(arrSort(['one', 'two', 'three']), ['one', 'three', 'two']);