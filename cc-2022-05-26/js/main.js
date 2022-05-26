// PREP

// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// P: string of words, array of words
// R: an array of words
// E: "Robin Singh" ==> ["Robin", "Singh"], "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
// P:

// create a function that takes in a string of words
function strToArr(str) {
// return an array of words
    return str.split(' ');
}
