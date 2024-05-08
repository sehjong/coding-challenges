// PREP

// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// More examples in the test cases.

// Good luck!

// P: an array of numbers
// R: the sum of the numbers that occur only once
// E: console.log(repeats([4, 5, 7, 5, 4, 8]), 15);
//    console.log(repeats([9, 10, 19, 13, 19, 13]), 19);
//    console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12);
// P:

// create a function that takes in an array of numbers
function repeats(arrNums) {
    // filter array to find elements that occur exactly once,
    // sum the elements that occur exactly once
    return arrNums.filter(e => arrNums.indexOf(e) === arrNums.lastIndexOf(e)).reduce((acc, c) => acc + c, 0);
}