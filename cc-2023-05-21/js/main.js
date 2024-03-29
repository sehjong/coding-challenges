// PREP

// Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

// Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

// Examples
// [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
// [0, 1, 2, 3, 4, 5]                ==>  []

// P: an array of numbers and strings
// R: find the duplicates in that array,
//    and return a new array of those duplicates,
//    the elements of the returned array should appear
//    in the order when they first appeared as duplicates,
//    numbers and their corresponding string representations
//    should not be treated as duplicates (i.e., "1" != 1)
// E: [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
//    [0, 1, 2, 3, 4, 5]                ==>  []
// P:

// create a function that takes in numbers and strings
function duplicates(arr) {
    let x = [];
    let y = [];
    arr.forEach((i) => {
        if(x.includes(i) === false) return x.push(i);
        if(x.includes(i) && y.includes(i) === false) return y.push(i);
    });
    return y;
}