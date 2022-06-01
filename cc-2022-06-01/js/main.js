// PREP

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// P: integers
// R: the sum of squares
// E: [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9
// P:

// create a function that takes in an array of numbers
function sumArrSquared(arr) {
    let sum = 0;
// loop through the array
    for(i = 0; i < arr.length; i++) {
        sum += arr[i] **2;
    }
// return the sum of the squared numbers
    return sum;
}