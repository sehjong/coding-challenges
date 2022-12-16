// PREP

// Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

// Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

// Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

// Examples:
// [0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
// [9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3

// P: an array of unique integers between 0 and 9 (inclusive, in no particular order)
// R: the missing element
// E: [0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
//    [9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3
// P:

// create a function that takes in an array of unique integers between 0 and 9 (inclusive, in no particular order)
function getMissingElement(intArr) {
    for(i = 0; i < 10; i++) {
        if(intArr.indexOf(i) === -1) return i;
    }
}