// PREP

// Steps

// Square the numbers that are greater than zero.
// Multiply by 3 every third number.
// Multiply by -1 every fifth number.
// Return the sum of the sequence.
// Example
// { -2, -1, 0, 1, 2 } returns -6

// 1. { -2, -1, 0, 1 * 1, 2 * 2 }
// 2. { -2, -1, 0 * 3, 1, 4 }
// 3. { -2, -1, 0, 1, -1 * 4 }
// 4. -6
// P.S.: The sequence consists only of integers. And try not to use "for", "while" or "loop" statements.

// P: an array of integers
// R: the sum of the modified sequence
// E: { -2, -1, 0, 1, 2 } returns -6
// P:

// create a function that takes in an array of integers
function sequenceSum(arrNums) {
    const modifiedArray = arrNums
        .map(e => e > 0 ? e * e : e)
        .map((e, i) => (i + 1) % 3 === 0 ? e * 3 : e)
        .map((e, i) => (i + 1) % 5 === 0 ? e * -1 : e);

    return modifiedArray.reduce((acc, c) => acc + c, 0);
}