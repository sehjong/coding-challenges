// PREP

// Each floating-point number should be formatted that only the first two decimal places are returned. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

// Don't round the numbers! Just cut them after two decimal places!

// Right examples:  
// 32.8493 is 32.84  
// 14.3286 is 14.32

// Incorrect examples (e.g. if you round the numbers):  
// 32.8493 is 32.85  
// 14.3286 is 14.33

// P: a float
// R: only the first two decimal places
// E: 32.8493 is 32.84  
//    14.3286 is 14.32
// P:

// create a function expression that takes in a floated number,
// multiply the number by 100 to shift the decimal two places to the right,
// use Math.trunc to drop any digits beyond the decimal point,
// divide by 100 to shift the decimal back two places to the left
const twoDecimalPlaces = num => Math.trunc(num * 100) / 100;

console.log(twoDecimalPlaces(32.8493), 32.84);
console.log(twoDecimalPlaces(14.3286), 14.32);
console.log(twoDecimalPlaces(4.6537), 4.65);