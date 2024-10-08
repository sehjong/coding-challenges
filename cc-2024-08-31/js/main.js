// PREP

/*
Build a function sumNestedNumbers/sum_nested_numbers that finds the sum of all numbers in a series of nested arrays raised to the power of their respective nesting levels. Numbers in the outer most array should be raised to the power of 1.

For example,

sumNestedNumbers([1, [2], 3, [4, [5]]])
should return 1 + 2*2 + 3 + 4*4 + 5*5*5 === 149
*/

// P: an array of nested numbers and a current nesting level, defaulting to 1
// R: the sum of all numbers, with each number raised to the power of its respective nesting level
// E: [1, [2], 3, [4, [5]]] -> 149
// P:

// create a function that takes in an array of nested numbers and a current nesting level, defaulting to 1
function sumNestedNumbers(arr, level = 1) {
    // use reduce to calculate the sum, checking if each element is an array,
    // if it's an array, recursively call sumNestedNumbers with an incremented level,
    // if it's a number, raise it to the power of the current level and add it to the accumulator
    return arr.reduce((acc, c) => acc + (Array.isArray(c) ? sumNestedNumbers(c, level + 1) : Math.pow(c, level)), 0);
}

console.log(sumNestedNumbers([1, [2], 3, [4, [5]]]), 149);