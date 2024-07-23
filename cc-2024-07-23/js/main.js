// PREP

/*
The purpose of this kata is to write a higher-order function returning a new function that iterates on a specified function a given number of times. This new function takes in an argument as a seed to start the computation from.

For instance, consider the function getDouble. When run twice on value 3, yields 12 as shown below.

getDouble(3) => 6
getDouble(6) => 12
Let us name the new function createIterator and we should be able to obtain the same result using createIterator as shown below:

var doubleIterator = createIterator(getDouble, 2); // This means, it runs *getDouble* twice
doubleIterator(3) => 12
For the sake of simplicity, all function inputs to createIterator would be functions returning a small number and number of iterations would always be integers.
*/

// P: a function that will be iterated over,
//    and the number of times to iterate the function
// R: a new function that, when called with an argument,
//    repeatedly applies the provided function to the argument the specified number of times
// E: from the coding challenge description:
//    const getDouble = (n) => n * 2;
//    const doubleIterator = createIterator(getDouble, 2);
//    console.log(doubleIterator(3), 12);
//
//    to verify that the createIterator function works correctly for different functions,
//    not just the one provided in the original example:
//    const increment = (n) => n + 1;
//    const incrementIterator = createIterator(increment, 3);
//    console.log(incrementIterator(5), 8);
// P:

// create a function expression that takes a function and the number of times to iterate the function
let createIterator = function(func, n) {
    // return a new function that takes an initial value
    return function(val) {
        // loop n times, applying func to val on each iteration
        for (let i = 0; i < n; i++) {
            val = func(val);
        }
        // return the final value
        return val;
    }
}

// from the coding challenge description:
const getDouble = (n) => n * 2;
const doubleIterator = createIterator(getDouble, 2);
console.log(doubleIterator(3), 12);

// to verify that the createIterator function works correctly for different functions,
// not just the one provided in the original example:
const increment = (n) => n + 1;
const incrementIterator = createIterator(increment, 3);
console.log(incrementIterator(5), 8);