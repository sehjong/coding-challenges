// PREP

/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
*/

// P: a string
// R: the string with the first and last characters removed
// E: console.log(removeChar('abc'), 'b');
// P:

// create a function that takes in a string
function removeChar(str) {
    // use the slice() method to remove the first and last characters from the string
    return str.slice(1, -1);
}

console.log(removeChar('abc'), 'b');