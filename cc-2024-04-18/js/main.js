// PREP

// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

// Good luck!

// P: a single string consisting of lowercase letters and numbers
// R: the largest number found in the string,
//    if no numbers are found, return 0
// E: solve("gh12cdy695m1") = 695, because this is the largest of all number groupings
// P:

// create a function that takes in a single string consisting of lowercase letters and numbers
function solve(str) {
    let maxNum = 0;
    let currentNum = '';

    for (const char of str) {
        if (char >= '0' && char <= '9') { // check if the character is a digit
            currentNum += char; // build the current number
        } else if (currentNum.length > 0) {
            // if the current character is not a digit and a number is built up
            maxNum = Math.max(maxNum, parseInt(currentNum)); // update maxNum
            currentNum = ''; // reset currentNum
        }
    }

    // check last number grouping after the loop ends
    if (currentNum.length > 0) {
        maxNum = Math.max(maxNum, parseInt(currentNum));
    }

    return maxNum;
}