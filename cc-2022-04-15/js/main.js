// PREP

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// P: a string
// R: the string without exclamation marks 
// E: 'hello!' => 'hello'
//    'hello!!' => 'hello'
// P:

// create a function that takes in a string
function removeExclamationMarks(str) {
    return str.split('!').join('');
}