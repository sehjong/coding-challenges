// PREP

/*
Midpoint Sum
For a given list of integers, return the index of the element where the sums of the integers to the left and right of the current element are equal.

Ex:

ints = [4, 1, 7, 9, 3, 9]
# Since 4 + 1 + 7 = 12 and 3 + 9 = 12, the returned index would be 3

ints = [1, 0, -1]
# Returns None/nil/undefined/etc (depending on the language) as there
# are no indices where the left and right sums are equal
Here are the 2 important rules:

The element at the index to be returned is not included in either of the sum calculations!
Both the first and last index cannot be considered as a "midpoint" (So None for [X] and [X, X])
*/

// P: an array of numbers
// R: the index of the element where the sum of the elements to the left and right of this element are equal,
//    undefined if no such index exists
// E: [4, 1, 7, 9, 3, 9] -> 3
//    [1, 0, -1] -> undefined
// P:

// create a function that takes in an array of numbers
function midpointSum(arr) {
    // determine the length of the array
    let n = arr.length;

    // if the array length is less than 3, return undefined since there's no valid midpoint
    if (n < 3) return undefined;

    // initialize sum to store the total sum of the array elements
    let sum = 0;

    // initialize mid to store the sum of elements to the left of the current index
    let mid = arr[0];

    // determine the total sum of the array
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }

    // iterate through the array, skipping the first and last elements
    for (let i = 1; i < n - 1; i++) {
        let c = arr[i];

        // if the sum of the left elements equals the sum of the right elements, return the index
        if (mid === sum - mid - c) return i;

        // update the sum of the left elements
        mid += c;
    }

    // return undefined if no valid midpoint is found
    return undefined;
}