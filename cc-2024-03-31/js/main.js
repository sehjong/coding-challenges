// PREP

// There exist two zeroes: +0 (or just 0) and -0.

// Write a function that returns true if the input number is -0 and false otherwise (True and False for Python).

// In JavaScript / TypeScript / Coffeescript the input will be a number.

// In Python / Java / C / NASM / Haskell / the input will be a float.

// P: a number
// R: true if the input number is -0, and false otherwise
// E: console.log(isNegativeZero(-5), false);
//    console.log(isNegativeZero(0), false);
//    console.log(isNegativeZero(-0), true);
//    console.log(isNegativeZero(5), false);
// P:

// create a function expression that takes in a number,
// use the Object.is method to compare num with -0,
// Object.is provides an accurate way to compare values,
// ensuring -0 is distinguished from +0 and other numbers
const isNegativeZero = (num) => Object.is(num, -0);