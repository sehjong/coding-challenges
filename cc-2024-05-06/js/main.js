// PREP

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

// P: an array of the numbers 0 and 1 of varying length
// R: the binary number represented by the array
// E: Testing: [0, 0, 0, 1] ==> 1
//    Testing: [0, 0, 1, 0] ==> 2
//    Testing: [0, 1, 0, 1] ==> 5
//    Testing: [1, 0, 0, 1] ==> 9
//    Testing: [0, 0, 1, 0] ==> 2
//    Testing: [0, 1, 1, 0] ==> 6
//    Testing: [1, 1, 1, 1] ==> 15
//    Testing: [1, 0, 1, 1] ==> 11
// P:

// create a function expression that takes in an array of the numbers 0 and 1 of varying length,
// join the array elements into a single string of binary digits,
// convert the binary string to a decimal number using parseInt,
// where 2 specifies the base (binary) for conversion
const parseBinary = arrNums => parseInt(arrNums.join(''), 2);

console.log(parseBinary([0, 0, 0, 1]), 1);
console.log(parseBinary([0, 0, 1, 0]), 2);
console.log(parseBinary([0, 1, 0, 1]), 5);
console.log(parseBinary([1, 0, 0, 1]), 9);
console.log(parseBinary([0, 0, 1, 0]), 2);
console.log(parseBinary([0, 1, 1, 0]), 6);
console.log(parseBinary([1, 1, 1, 1]), 15);
console.log(parseBinary([1, 0, 1, 1]), 11);
console.log(parseBinary([1, 1, 1, 1, 1, 1, 1, 1]), 255);
console.log(parseBinary([0, 0, 0, 0, 0, 0, 0, 0]), 0);
console.log(parseBinary([1, 0, 1, 1, 0, 1, 0]), 90);