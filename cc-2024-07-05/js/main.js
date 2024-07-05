// PREP

/*
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.
*/

// P: an array of arrays
// R: a number representing the length of the missing array
// E: [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3
// P:

// create a function that takes in an array of arrays
function findMissingArray(nestedArrays) {
    // if the input array is null or empty, return 0
    if (!nestedArrays || nestedArrays.length === 0) {
        return 0;
    }

    // map each subarray to its length, or 0 if the subarray is null
    const lengths = nestedArrays.map(arr => arr ? arr.length : 0).sort((a, b) => a - b);

    // if any length is 0, return 0
    if (lengths.includes(0)) {
        return 0;
    }

    // iterate through the lengths and find the first gap in the sequence
    for (let i = 0; i < lengths.length - 1; i++) {
        if (lengths[i] + 1 !== lengths[i + 1]) {
            return lengths[i] + 1;
        }
    }

    // return 0 if no missing length is found, though the problem guarantees there will be one
    return 0;
}

console.log(findMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]), 3);
console.log(findMissingArray([]), 0);
console.log(findMissingArray(null), 0);