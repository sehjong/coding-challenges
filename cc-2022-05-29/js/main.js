// PREP

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// P: integers as strings and numbers
// R: the sum of the array values as if all were numbers
// E: ['4', '2', '11', '61'] => 78
// P:

// create a function that takes in an array of integers as strings and numbers
function sumArrStrNums(arr) {
// return the sum of the array values as if all were numbers
    return arr.reduce((acc, c) => Number(acc) + Number(c), 0);
}