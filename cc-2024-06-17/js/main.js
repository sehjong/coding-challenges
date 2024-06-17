// PREP

/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

// P: an array of numbers
// R: the number that appears an odd number of times
// E: console.log(findOdd([7]), 7);
//    console.log(findOdd([0]), 0);
//    console.log(findOdd([1, 1, 2]), 2);
//    console.log(findOdd([0, 1, 0, 1, 0]), 0);
//    console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]), 4);
// P:

// create a function that takes in an array of numbers
function findOdd(arr) {
    const count = {};

    // count occurrences of each number
    arr.forEach(num => {
        count[num] = (count[num] || 0) + 1;
    })

    // find and return the number that occurs an odd number of times
    for (let num in count){
        if (count[num] % 2 !== 0) {
            return parseInt(num);
        }
    }
}

console.log(findOdd([7]), 7);
console.log(findOdd([0]), 0);
console.log(findOdd([1, 1, 2]), 2);
console.log(findOdd([0, 1, 0, 1, 0]), 0);
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]), 4);