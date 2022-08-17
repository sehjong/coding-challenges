// PREP

// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

// P: an array of numbers, contains minimum two elements and every element is an integer
// R: the largest pair sum from the array
// E: [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
//    [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// P:

// create a function that takes in an array of numbers
function largestPairSum(numbers) {
    const num = numbers.sort((a, b) => b - a);
    num[0] + num[1];
}