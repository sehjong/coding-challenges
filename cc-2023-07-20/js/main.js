// PREP

// You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

// It is guaranteed that a and b are both present in arr.

// P: you're given an array of integers, and two integers a and b as parameters
// R: a boolean value of true if a and b are consecutive, false otherwise
// E: console.log(consecutive([1, 2, 3, 4, 5, 6, 7, 8, 9], 2, 8), false);
//    console.log(consecutive([1, 2, 3, 4, 5, 6, 7, 8, 9], 2, 3), true);
//    console.log(consecutive([1, 4, 5, 3, 2, 7, 6, 23, 76, 11, 0], 2, 3), true);
// P:

// create a function that takes in an array of integers, and two integers a and b as parameters
function consecutive(arr, a, b) {
    return Math.abs(arr.indexOf(a) - arr.indexOf(b)) === 1;
}