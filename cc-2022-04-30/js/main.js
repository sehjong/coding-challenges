// PREP

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// P: array of integers, if the input is an empty array or is null, return an empty array, 0 is neither positive nor negative
// R: an array where the first element is the count of positive numbers and the second element is the sum of negative numbers
// E: For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]
// P:

// create a function that takes in an array of numbers
function countPositivesSumNegatives(input) {
    let count = 0;
    let sum = 0;
    if(input === null || input.length === 0) {
        return [];
    }
    for(let i = 0; i < input.length; i++) {
        if(input[i] > 0) {
            count += 1;
        }else if(input[i] <= 0) {
            sum += input[i];
        }
    }
    return [count, sum];
}