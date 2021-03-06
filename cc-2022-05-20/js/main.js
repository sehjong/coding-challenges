// PREP

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// P: numbers only, integers, if there is nothing to sum, the sum is default to 0
// R: the sum of all of the positive numbers
// E: [1,-4,7,12] => 1 + 7 + 12 = 20
// P:

// create a function that takes in an array of numbers
function sum(arr) {
// loop through the array and return the sum
    return arr.reduce((acc,c) => acc + (c > 0 ? c : 0), 0);
}