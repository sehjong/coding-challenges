// PREP

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// P: string, only letters, empty string is an isogram, ignore letter case
// R: true or false whether a string comprised of letters is an isogram with no repeating letters, consecutive or non-consecutive
// E: "Dermatoglyphics" --> true
//    "aba" --> false
//    "moOse" --> false
// P:

// create a function that takes in a string of letters
function isIsogram(str) {
    return str.toLowerCase() === [...new Set(str.toLowerCase().split(' '))].join('');
}