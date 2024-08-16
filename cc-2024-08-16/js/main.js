// PREP

/*
Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"
*/

// P: a string
// R: a string containing only the characters that appear more than once in the input string,
//    and in the order they originally appeared
// E: 'abccdefee' -> 'cceee'
// P:

// create a function that takes in a string
function onlyDuplicates(str) {
    // split the string into an array of characters,
    // filter out characters that appear only once,
    // then join the remaining characters back into a string
    return str.split('').filter(e => str.indexOf(e) != str.lastIndexOf(e)).join('');
}