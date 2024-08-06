// PREP

/*
Your task is to finish two functions, minimumSum and maximumSum, that take 2 parameters:

values: an array of integers with an arbitrary length; may be positive and negative
n: how many integers should be summed; always 0 or bigger
Example:
var values = [5, 4, 3, 2, 1];
minimumSum(values, 2); // should return 1+2 = 3
maximumSum(values, 3); // should return 3+4+5 = 12
All values given to the functions will be integers. Also take care of the following special cases:

if values is empty, both functions should return 0
if n is 0, both functions should also return 0
if n is larger than values's length, use the length instead.
*/

// P: an array of integers, and a whole number
// R: the sum of the smallest and largest integers in the array
// E: var values = [5, 4, 3, 2, 1];
//    minimumSum(values, 2); // should return 1+2 = 3
//    maximumSum(values, 3); // should return 3+4+5 = 12
// P:

// create a function that takes in an array of integers, and a whole number,
// to calculate the minimum sum of the smallest integers in an array
function minimumSum(values, n) {
    // sort the array in ascending order and pass it to the calculateSum function
    return calculateSum(values.sort(ascendingOrder), n);
}

// create a function that takes in an array of integers, and a whole number,
// to calculate the maximum sum of the largest integers in an array
function maximumSum(values, n) {
    // sort the array in ascending order, reverse it for descending order,
    // and pass it to the calculateSum function
    return calculateSum(values.sort(ascendingOrder).reverse(), n);
}

// create a helper function to sum the first n integers of an array
function calculateSum(values, n) {
    // slice the array to get the first n elements, and then use reduce to sum them up
    return values.slice(0, n).reduce((total, current) => total + current, 0);
}

// create a comparison function to sort integers in ascending order
function ascendingOrder(a, b) {
    return a - b;
}