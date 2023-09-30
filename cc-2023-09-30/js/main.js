// PREP

// Mash 2 arrays together so that the returning array has alternating elements of the 2 arrays . Both arrays will always be the same length.

// eg. [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']

// P: two arrays of the same length
// R: one array with alternating elements
// E: [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']
// P:

// create a function that takes in two arrays
function mergeArrays(array1, array2) {
    const result = [];

    for (let i = 0; i < array1.length; i++) {
        result.push(array1[i], array2[i]);
    }

    return result;
}