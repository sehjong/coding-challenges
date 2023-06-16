// PREP

// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

// Examples:

// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

// [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
// Points:

// The arrays may be of different lengths, with at least one character/digit.
// One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).

// P: two arrays, an array of strings and an array of natural numbers
// R: a combined array with alternating elements from each input array in turn
// E: ['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5] becomes  ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]
//    [1, 2, 3], ['a', 'b', 'c', 'd', 'e', 'f'] becomes [1, 'a', 2, 'b', 3, 'c', 'd', 'e', 'f']
// P:

// create a function that takes in two arrays, an array of strings and an array of natural numbers
function mergeArrs(a, b) {
    let mergedArray = [];
    let counter = 0;
    while(a[counter] || b[counter]) {
        if(a[counter]) {
            mergedArray.push(a[counter]);
        }
        if(b[counter]) {
            mergedArray.push(b[counter]);
        }
        counter++;
    }
}