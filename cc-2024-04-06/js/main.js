// PREP

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// P: a two-dimensional array of integers
// R: the flattened version of the array with all the integers in the sorted (ascending) order
// E: Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9]
// P:

// create a function that takes in a two-dimensional array of integers
function flattenAndSort(arr) {
    // use the spread operator/syntax "..." and the concat() method to merge the nested arrays into a single array,
    // use the sort() method to sort the new array in ascending order
    return [].concat(...arr).sort((a, b) => a - b);
}