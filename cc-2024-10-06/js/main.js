// PREP

/*
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
*/

// P: two numbers, a value, and a maximum boundry for its multiples
// R: an array of numbers that are multiples of the given number, up to and including the maximum boundry
// E: (2, 6) -> [2, 4, 6]
// P:

// create a function that takes in two numbers, a value, and a maximum boundry for its multiples
function findMultiples(val, limit) {
    // initialize an empty array to store the multiples
    let result = [];

    // iterate through multiples of val starting from val up to and including the limit
    for (let i = val; i <= limit; i += val) {
        // push the multiple into the result array
        result.push(i);
    }

    // return the result array containing the multiples
    return result;
}