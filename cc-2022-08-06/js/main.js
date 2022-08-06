// PREP

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// P: string of words, including spaces
// R: reverses each word in the string, all spaces in the string should be retained
// E: "This is an example!" ==> "sihT si na !elpmaxe"
//    "double  spaces"      ==> "elbuod  secaps"
// P:

// create a function that takes in a string of words
function reverseWords(str) {
    return str.split('').reverse().join('').split(' ').reverse().join(' ');
}