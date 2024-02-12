// PREP

// You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
// The value of d will always be 0 - 9.
// The value of x will always be greater than 0.

// You have to return as an array

// the count of these numbers,
// their sum
// and their product.

// For example:
// x = 11
// d = 1
// ->
// Numbers: 1, 10, 11
// Return: [3, 22, 110]

// If there are no numbers, which include the digit, return [0,0,0].

// P: a number x representing the upper limit of the range to search within, inclusive,
//    the value of which will always be greater than 0,
//    and a number d between 0 and 9, inclusive, representing the digit to search for within the numbers
// R: an array containing the count of numbers within the range 1 to x that contain the digit d,
//    the sum of these numbers, and the product of these numbers,
//    if no numbers are found, the product is 0
// E: x = 11
//    d = 1
//    ->
//    Numbers: 1, 10, 11
//    Return: [3, 22, 110]
// P: 

// create a function that takes in a number x representing the upper limit of the range to search within, inclusive,
// the value of which will always be greater than 0,
// and a number d between 0 and 9, inclusive, representing the digit to search for within the numbers
function findNums(x, d) {
    // initialize count of numbers containing the digit to 0
    let count = 0;
    // initialize sum of numbers containing the digit to 0
    let sum = 0;
    // initialize product of numbers containing the digit to 1,
    // starting with 1 ensures that the first multiplication operation has the correct starting point,
    // otherwise, starting from 0 would result in the product of any series being 0
    let product = 1;

    // iterate through the range from 1 to x, inclusive
    for (let i = 1; i <= x; i++) {
        // convert the current number i to a string and check if it includes the digit d
        if (String(i).includes(d)) {
            count++; // increment count for each number found
            sum += i; // add the number to the sum
            product *= i; // multiply the product by the number
        }
    }

    // if no numbers containing the digit were found, return [0, 0, 0],
    // otherwise, return the count, sum, and product of the numbers found
    return count === 0 ? [0, 0, 0] : [count, sum, product];
}

console.log(findNums(11, 1), [3, 22, 110]);
console.log(findNums(7, 6), [ 1, 6, 6 ]);
console.log(findNums(5, 6), [ 0, 0, 0 ]);