// PREP

// A non-empty array a of length n is called an array of all possibilities if it contains all numbers between [0,a.length-1].Write a method named isAllPossibilities that accepts an integer array and returns true if the array is an array of all possibilities, else false.

// Example:

// a=[1,2,0,3]
// a.length-1=3 
// a includes [0,3] ,hence the function should return true

// P: an integer array containing elements
// R: true if the array is an "array of all possibilities," otherwise false
// E: a=[1,2,0,3]
//    a.length-1=3 
//    a includes [0,3] ,hence the function should return true
// P:

// create a function called isAllPossibilities that takes in an array of integers
function isAllPossibilities(arr) {
    let expectedSum = 0;

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];

        if (num < 0 || num >= arr.length) {
            return false;
        }

        expectedSum += num;
    }

    const expectedSumAll = (arr.length - 1) * arr.length / 2;

    return expectedSum === expectedSumAll;
}