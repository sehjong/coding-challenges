// PREP

// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

// P: strings, words only, letters, spaces
// R: every letter in the string switched from uppercase to lowercase and from lowercase to uppercase, keep word order and spaces
// E: Hello World -> hELLO wORLD
// P:

// create a function that takes in a string
function alternateCase(str) {
    return str.split(' ').map(function(e) {
        return e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase();
    }).join(' ');
}