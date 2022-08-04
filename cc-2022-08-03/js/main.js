// PREP

// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

// P: array of integers
// R: an array of even numbers
// E: getEvenNumbers([2,4,5,6]) // should == [2,4,6]
// P:

// create a function that takes in an array of numbers
function getEvenNumbers(intArr) {
    return intArr.filter(a => a % 2 == 0);
}