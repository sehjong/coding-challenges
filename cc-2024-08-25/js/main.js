// PREP

/*
Given a string of integers, return the number of odd-numbered substrings that can be formed.

For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

solve("1341") = 7. See test cases for more examples.

Good luck!
*/

// P: a string
// R: a number representing the number of odd-numbered substrings that can be formed from the string
// E: solve("1341") = 7
// P:

// create a function that takes in a string
function solve(str) {
    // convert the string into an array of characters,
    // then use reduce to count the number of odd numbered substrings,
    // if the character is an odd number, add the current index + 1 to the accumulator
    return [...str].reduce((acc, c, i) => acc + (+c % 2 ? i + 1 : 0), 0);
}