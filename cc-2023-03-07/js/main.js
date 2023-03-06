// PREP

// Given a list of integers values, your job is to return the sum of the values; however, if the same integer value appears multiple times in the list, you can only count it once in your sum.

// For example:

// [ 1, 2, 3] ==> 6

// [ 1, 3, 8, 1, 8] ==> 12

// [ -1, -1, 5, 2, -7] ==> -1

// [] ==> null
// Good Luck!

// P: an array of integers
// R: the sum of the values; however, if the same integer value appears multiple times in the list, you can only count it once in your sum
// E: [ 1, 2, 3] ==> 6
//    [ 1, 3, 8, 1, 8] ==> 12
//    [ -1, -1, 5, 2, -7] ==> -1
//    [] ==> null
// P:

// create a function that takes in an array of numbers
function uniqueSum(intArr) {
    [...new Set(intArr)].reduce((a, b) => a + b, null);
}