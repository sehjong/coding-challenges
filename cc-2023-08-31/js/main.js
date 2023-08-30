// PREP

// Given two arrays of integers m and n, test if they contain at least one identical element. Return true if they do; false if not.

// Your code must handle any value within the range of a 32-bit integer, and must be capable of handling either array being empty (which is a false result, as there are no duplicated elements).

// P: two arrays of integers m and n
// R: true if they contain at least one identical element; false if not
// E: console.log(duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9]), true);
//    console.log(duplicateElements([0, 1, 2, 3, 4], [5, 6, 7, 8, 9]), false);
//    console.log(duplicateElements([], [9, 8, 7, 6, 5]), false);
// P:

// create a function that takes in two arrays of integers m and n
function duplicateElements(m, n) {
    m.some(e => n.includes(e));
}