// PREP

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// P: an array of whole numbers, no floats, minimum of 4 whole numbers in the array
// R: the sum of the two lowest positive numbers given an array of minimum 4 positive integers
// E: [19, 5, 42, 2, 77], the output should be 7
//    [10, 343445353, 3453445, 3453545353453] should return 3453455
// P:

// create a function that takes in an array of numbers
function sumTwoSmallestNumbers(numbers) {
    let first = Math.min(...numbers);
    numbers.splice(numbers.indexof(first), 1);
    let second = Math.min(...numbers);
    return first + second;
}