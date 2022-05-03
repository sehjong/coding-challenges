// PREP

// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

// P: integers
// R: sum the differences between consecutive pairs in the array in descending order
// E: [2, 1, 10]  -->  9
//    In descending order: [10, 2, 1]
//    Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
// P:

// create a function that takes in an array of numbers
function sumOfDiff(intArr) {
    return intArr.length > 1 ? Math.max(...intArr) - Math.min(...intArr) : 0;
}