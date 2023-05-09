// PREP

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"
// Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.

// P: a string of words,
//    words will be separated by a single space,
//    there will be no leading or trailing spaces in the string,
//    an empty string (0 words) is a valid input
// R: output a string with all consecutive duplicate words from the input string removed,
//    leaving only first words entries
// E: "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
// --> "alpha beta gamma delta alpha beta gamma delta"
// P: 

// create a function expression that takes in a string of words
const removeConsecutiveDuplicateWords = str => str.split(' ').filter((e, i, a) => e != a[i - 1]).join(' ');