// PREP

// Extend the Array's built-in functions by implementing .max() method. This method will return the largest number in the array. If the array contains one or more non-number elements that can't be converted into numbers (e.g., string letters), return NaN

// Example:

// [2,5,1,3].max() // returns 5
// [1,2,3,8,4,9,7,42,99].max() // returns 99
// [2,'5',1,3].max() // returns 5 ("5" can be converted to 5)
// [2,5,1,'ab'].max() // returns NaN ("ab" can't be converted to a number)
// Array will contain at least one item.

// P: the function .max() should be added as a method to the prototype of the Array object
// R: the largest number in the array
// E: [2,5,1,3].max() // returns 5
//    [1,2,3,8,4,9,7,42,99].max() // returns 99
//    [2,'5',1,3].max() // returns 5 ("5" can be converted to 5)
//    [2,5,1,'ab'].max() // returns NaN ("ab" can't be converted to a number)
// P:

// extend Array.prototype with a method .max() to create a function that returns the largest number in the array
Array.prototype.max = function() {
    return Math.max();
}