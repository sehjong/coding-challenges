// PREP

// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.

// P: whole numbers
// R: the digits that are not present in any of them
// E: [12, 34, 56, 78]  =>  "09"
//    [2015, 8, 26]     =>  "3479"
// P:

// create a function that takes in whole numbers
function unusedDigits(...args) {
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let numStr = args.join('');
    nums.filter(el => !numStr.includes(el)).join('');
}