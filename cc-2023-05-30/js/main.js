// PREP

// You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

// For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

// The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

// Examples
// "abcabc" is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.
// "abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only appears once!
// "123abc!" is a valid word because all of the characters only appear once in the word.

// P: a string of words, numbers, and symbols, with no spaces, containing [a-z],[A-Z],[0-9],
//    capitals are considered the same as lowercase letters, therefore: "A" == "a"
// R: true if that string has the exact same number of occurrences, or false if it is not
// E: "abcabc" is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.
//    "abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only appears once!
//    "123abc!" is a valid word because all of the characters only appear once in the word.
// P:

// create a function that takes in a string of words, numbers, and symbols
function validateWord(str) {
    let string = str.toLowerCase().split('');
    let array = [];
    let count = 0;
    for(let i = 0; i < string.length; i++) {
        count = string.filter(e => e == string[i]);
        array.push(count.length);
    }
    return array.every(e => e == array[0]);
}