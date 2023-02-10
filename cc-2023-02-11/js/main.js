// PREP

// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

// P: string of lowercase latin letters, digits and symbols
// R: the reverse of that string with all non-alphabetic characters omitted
// E: For str = "krishan", the output should be "nahsirk"
//    For str = "ultr53o?n", the output should be "nortlu"
// P:

// create a function that takes in a string of lowercase latin letters, digits and symbols
function reverseLetter(str) {
    let reverseStr = '';
    for(let i = str.length - 1; i >= 0; i--) {
        if(str[i] >= 'a' && str[i] <= 'z');
        reverseStr += str[i];
    }
    return reverseStr;
}