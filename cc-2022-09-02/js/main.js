// PREP

// Write function which will create a string from a list of strings, separated by space.

// Example:

// ["hello", "world"] -> "hello world"

// P: strings only
// R: a string from a list of strings, separated by space
// E: ["hello", "world"] -> "hello world"
// P:

// create a function that takes in words as an array of strings
function wordsToSentence(words) {
// use the join('') method to concatenate all the elements in the array into one string, return the new string
    return words.join(' ');
}