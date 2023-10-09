// PREP

// Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

// Note that numbers written as strings are strings and must be sorted with the other strings.

// P: an array of numbers and strings
// R: a single array with the numbers sorted in ascending order, followed by the strings sorted in alphabetic order
// E: console.log(doubleSort([3, 'cat', 'dog', 1, 'bird', 2]), [1, 2, 3, 'bird', 'cat', 'dog']);
//    console.log(doubleSort(['Bob', 66, 'Aardvark', 0, 1, 'Zebra']), [0,1,66,'Aardvark','Bob','Zebra']);
//    console.log(doubleSort(['apple', 166, 'ocean', 0, 1,]), [0, 1, 166, 'apple', 'ocean']);
// P:

// create a function that takes in an array of numbers and strings
function doubleSort(arr) {
    let num = arr.filter(e => typeof e === 'number').sort((a, b) => a - b);
    let str = arr.filter(e => typeof e === 'string').sort();
    return num.concat(str);
}