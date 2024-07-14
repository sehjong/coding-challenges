// PREP

/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

// P: an array of numbers
// R: the unique number from the input array
// E: findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
//    findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// P:

// create a function that takes in an array of numbers
function findUniq(arr) {
    // sort the array
    arr.sort((a, b) => a - b);
    // compare the first and second elements
    // if they are the same, return the last element; otherwise, return the first element
    return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
}

console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
console.log(findUniq([0, 0, 0.55, 0, 0]), 0.55);