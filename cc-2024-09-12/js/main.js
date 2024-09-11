// PREP

/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

// P: an array of numbers
// R: the average of the numbers in the array,
//    0 if the array is empty
// E: console.log(findAverage([1, 1, 1]), 1);
//    console.log(findAverage([1, 2, 3]), 2);
//    console.log(findAverage([]), 0);
// P:

// create a function that takes in an array of numbers
function findAverage(arr) {
    // check if the array is empty,
    // use reduce to sum the numbers and then divide by the array length to get the average,
    // return 0 if the array is empty
    return arr.length > 0 ? arr.reduce((acc, c) => acc + c) / arr.length : 0;
}