// PREP

/*
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
*/

// P: characters char1 and char2, which can be letters, numbers, or symbols
// R: 1 if both characters are letters and they have the same case,
//    0 if both characters are letters but have different cases,
//    -1 if either or both characters are not letters
// E: console.log(checkCase('a', 'g'), 1);
//    console.log(checkCase('A', 'C'), 1);
//    console.log(checkCase('b', 'G'), 0);
//    console.log(checkCase('B', 'g'), 0);
//    console.log(checkCase('0', '?'), -1);
// P:

// create a function that takes in characters char1 and char2, which can be letters, numbers, or symbols
function checkCase(char1, char2) {
    // check if either character is not a letter
    if (char1.toLowerCase() === char1.toUpperCase() || char2.toLowerCase() === char2.toUpperCase()) {
        return -1;
    // check if both characters are the same case
    } else if (char1 === char1.toLowerCase() && char2 === char2.toLowerCase() || char1 === char1.toUpperCase() && char2 === char2.toUpperCase()) {
        return 1;
    } else {
        // if they are letters, but not the same case
        return 0;
    }
}

console.log(checkCase('a', 'g'), 1);
console.log(checkCase('A', 'C'), 1);
console.log(checkCase('b', 'G'), 0);
console.log(checkCase('B', 'g'), 0);
console.log(checkCase('0', '?'), -1);