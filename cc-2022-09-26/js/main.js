// PREP

// Write a function that doubles every second integer in a list, starting from the left.

// Example:

// For input array/list :

// [1,2,3,4]
// the function should return :

// [1,4,3,8]

// P: an array of numbers, integers
// R: every second integer in a list doubled, starting from the left
// E: [1,2,3,4] should return [1,4,3,8]
// P:

// create a function that takes in an array of numbers
function doubleEveryOther(intArr) {
    for(let i = 1; i < intArr.length; i += 2) {
        intArr[i] *= 2;
    }
}