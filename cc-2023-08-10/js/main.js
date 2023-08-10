// PREP

// Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

// Example (s, sep --> Output)

// "hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
// "19999999"   , ":" --> "1:7:7:7:7:7:7:7"
// "^^^**$"     , "x" --> "3x3x3x2x2x1"

// P: a string of letters, numbers, words, symbols, and a separator character
// R: output a string replacing each letter, number, word, symbol,
//    with a number representing the number of times each,
//    of these occurs in the input string,
//    and separating each number with the separator character
// E: "hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
//    "19999999"   , ":" --> "1:7:7:7:7:7:7:7"
//    "^^^**$"     , "x" --> "3x3x3x2x2x1"
// P:

// create a function that takes in a string of letters, numbers, words, symbols, and a separator character
function strToNum(str, sep) {
    return str.split('').map((e, i, a) => a.filter(char => char === e).length).join(sep);
}