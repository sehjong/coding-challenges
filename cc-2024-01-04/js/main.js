// PREP

// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

// Examples
// 2, 5  -->  [2, 4, 16, 256, 65536]
// 3, 3  -->  [3, 9, 81]

// P: a number x for the starting point of the sequence,
//    and a number n for the length of the array to be returned
// R: an array of numbers,
//    the length of the array is determined by n,
//    starting with x, each element in the array is the square of the previous number,
//    return an empty array if n is negative or zero
// E: 2, 5  -->  [2, 4, 16, 256, 65536]
//    3, 3  -->  [3, 9, 81]
//    5, 3  -->  [5, 25, 625]
// P:

// create a function that takes in two numbers,
// a number x for the starting point of the sequence,
// and a number n for the length of the array to be returned
function squares(x, n) {
// initialize an empty array
    let result = [];

// iterate from 0 up to (but not including) n
    for (let i = 0; i < n; i++) {
// append the current value of x to the result array
        result.push(x);
// square x for the next iteration
        x *= x;
    }

// return the array containing the sequence
    return result;
}