// PREP

// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

// P: an array of integers
// R: the values of the input array that are not odd,
//    (i.e., only even numbers, including zero),
//    in the same order as they appear in the input array
// E: console.log(noOdds([0, 1]), [0]);
//    console.log(noOdds([0, 1, 2, 3]), [0, 2]);
//    console.log(noOdds([-3, -2, -1, 0, 1, 2, 3]), [-2, 0, 2]);
// P:

// create a function expression that takes in an array of integers
// implicitly return a filtered array from values,
// where each element e returns true if e mod 2 is equal in type and value to 0,
// meaning e is even
let noOdds = values => values.filter(e => e % 2 === 0);

console.log(noOdds([0, 1]), [0]);
console.log(noOdds([0, 1, 2, 3]), [0, 2]);
console.log(noOdds([-3, -2, -1, 0, 1, 2, 3]), [-2, 0, 2]);