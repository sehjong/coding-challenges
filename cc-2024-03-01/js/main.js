// PREP

// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

// P: a string
// R: true if the string contains only unique characters, false otherwise
// E: console.log(hasUniqueChars('  nAa'), false);
//    console.log(hasUniqueChars('abcdef'), true);
//    console.log(hasUniqueChars('++-'), false);
// P:

// create a function expression that takes in a string,
// create a Set from the string, automatically removing duplicates,
// and compare its size to the original string length,
// if sizes match, all characters were unique, thus return true,
// otherwise, return false
let hasUniqueChars = (str) => new Set(str).size === str.length;

console.log(hasUniqueChars('  nAa'), false);
console.log(hasUniqueChars('abcdef'), true);
console.log(hasUniqueChars('++-'), false);