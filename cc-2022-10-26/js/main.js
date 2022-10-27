// PREP

// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"

// P: a string
// R: the given string with spaces inserted between each character
// E: spacify("hello world") // returns "h e l l o   w o r l d"
// P:

// create a function that takes in a string
function spacify(str) {
    return str.split('').join(' ');
}