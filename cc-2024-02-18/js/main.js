// PREP

// Is every value in the array an array?

// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

// Examples:

// [[1],[2]] => true
// ['1','2'] => false
// [{1:1},{2:2}] => false

// P: an array
// R: true if every element within the array is itself an array,
//    false if at least one element within the array is not an array
// E: [[1],[2]] => true
//    ['1','2'] => false
//    [{1:1},{2:2}] => false
// P:

// create a function expression that takes in an array,
// utilize the every() method to iterate over each element of the array,
// passing the Array.isArray() method as the callback function,
// which is a static method of the Array global object,
// to determine whether the provided value is an array, ensuring accurate checks across all elements
const arrCheck = arr => arr.every(Array.isArray);

console.log(arrCheck([[1], [2]]), true);
console.log(arrCheck([[1], '2']), false);
console.log(arrCheck(['1', [2]]), false);
console.log(arrCheck(['1', '2']), false);
console.log(arrCheck([{1:1}, {2:2}]), false);