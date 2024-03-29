// PREP

// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

// P: an array of integers
// R: the sum of all the integers that have an even index, multiplied by the integer at the last index
// E: console.log(evenLast([2, 3, 4, 5]), 30);
//    console.log(evenLast([2, 2, 2, 2]), 8);
//    console.log(evenLast([]), 0);
// P:

// create a function that takes in an array of numbers
function evenLast(arrNums) {
    const result = arrNums.reduce((acc, c, i) => {
        if (i % 2 === 0) {
            return acc + c;
        } else {
            return acc;
        }
    }, 0);
    return result * (arrNums[arrNums.length - 1] || 0);
}