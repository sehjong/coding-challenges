// PREP

// This kata is about converting numbers to their binary or hexadecimal representation:

// If a number is even, convert it to binary.
// If a number is odd, convert it to hex.
// Numbers will be positive. The hexadecimal string should be lowercased.

// P: a whole number
// R: the binary representation if the number is even,
//    the hexadecimal representation if the number is odd
// E: console.log(evensAndOdds(2), 10);
//    console.log(evensAndOdds(13), 'd');
//    console.log(evensAndOdds(0), 0);
// P:

// create a function expression that takes in a whole number,
// convert the number to a string representation,
// use base 16 for hexadecimal if the number is odd, num % 2 is non-zero,
// use base 2 for binary if the number is even, num % 2 is zero
const evensAndOdds = num => num.toString(num % 2 ? 16 : 2);