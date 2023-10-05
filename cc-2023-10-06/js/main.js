// PREP

// When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

// Example:

// 'red white blue' //returns string value of white

// 'red blue gold' //returns gold

// P: string of space-separated words
// R: the word with the longest length
// E: 'red white blue' //returns string value of white
//    'red blue gold' //returns gold
// P:

// create a function expression that takes in a string of space-separated words
let longestWord = stringOfWords => stringOfWords.split('').reduceRight((acc, c) => (c.length > acc.length) ? c : acc);