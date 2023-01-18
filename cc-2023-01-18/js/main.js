// PREP

// Given a non-negative integer, return an array / a list of the individual digits in order.

// Examples:

// 123 => [1,2,3]

// 1 => [1]

// 8675309 => [8,6,7,5,3,0,9]

// P: whole number
// R: an array / a list of the individual digits in order
// E: 123 => [1,2,3]
//    1 => [1]
//    8675309 => [8,6,7,5,3,0,9]
// P:

// create a function that takes in a whole number
function digitize(num) {
    return String(num).split('').map(Number);
}

console.log(digitize(123), [1, 2, 3]); // returns [1, 2, 3] [1, 2, 3]
console.log(digitize(1), [1]); // returns [1] [1]
console.log(digitize(8675309), [8, 6, 7, 5, 3, 0, 9]); // returns [8, 6, 7, 5, 3, 0, 9] [8, 6, 7, 5, 3, 0, 9]