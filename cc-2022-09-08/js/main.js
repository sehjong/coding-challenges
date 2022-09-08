// PREP

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity

// P: a lowercase string with no spaces
// R: capitalize the letters that occupy even indexes and odd indexes separately, index 0 will be considered even
// E: capitalize("abcdef") = ['AbCdEf', 'aBcDeF']
// P:

// create a function that takes in a string
function capitalize(s) {
    const odd = s.split('').map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join('');
    const even = s.split('').map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join('');
    return [even, odd];
}