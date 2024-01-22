// PREP

// Make the double() function return a new array with each value twice as large as the corresponding value in the passed in array. Your solution must use the map() function of the built-in javascript Array object.

// function double(array) {
//     // Use array.map() to return a new array with each value twice
//     // as large as the corresponding value in the passed in array.
// }
// For example:

// var someNumbers = [1,2,10,57];

// double(someNumbers); // should return [2,4,20,114]

// P: an array of numbers
// R: a new array with each value twice as large as the corresponding value using the map() method on the passed in array
// E: var someNumbers = [1,2,10,57];
//    double(someNumbers); // should return [2,4,20,114]
// P:

// create a function that takes in an array of numbers
function double(array) {
// use the map() method to double the values of the input array,
// the map() method does not modify or mutate the original array and returns a new array
    return array.map(x => x * 2);
}

console.log(double([1, 2, 10, 57]), [2, 4, 20, 114]);
console.log(double([0, -1, 5]), [0, -2, 10]);
console.log(double([0]), [0]);