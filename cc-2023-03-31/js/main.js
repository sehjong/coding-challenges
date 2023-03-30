// PREP

// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.

// P: a string and an array of integers representing indices
//    the string will be a lowercase string with no spaces and
//    the array will be an array of digits
// R: capitalize all letters at the given indices
// E: capitalize("abcdef",[1,2,5]) = "aBCdeF"
//    capitalize("abcdef",[1,2,5,100]) = "aBCdeF" - There is no index 100
// P:

// create a function that takes in a string and an array of integers representing indices
function capitalize(str, intArr) {
    return [...str].map((x, i) => intArr.includes(i) ? x.toUpperCase() : x).join(' ');
}