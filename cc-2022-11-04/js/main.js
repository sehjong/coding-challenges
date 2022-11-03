// PREP

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// P: a string of word(s)
// R: the length of the shortest word(s)
// E: console.log(findShort("lets talk about javascript the best language"), 3);
//    console.log(findShort("i want to travel the world writing code one day"), 1);
// P:

// create a function that takes in an string of word(s)
function findShort(str) {
    return Math.min(...str.split('').map(str => str.length));
}