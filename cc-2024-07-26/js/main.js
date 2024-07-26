// PREP

/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
*/

// P: a string
// R: a string where each letter in the input string is replaced with its corresponding position in the alphabet
// E: Input = "The sunset sets at twelve o' clock."
//    Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
// P:

// create a function that takes in a string
function alphabetPositions(str) {
    // initialize an empty result string
    let result = '';

    // iterate through each character in the string
    for (let i = 0; i < str.length; i++) {
        // convert the character to uppercase and get its ASCII value
        let code = str.toUpperCase().charCodeAt(i);
        // if the ASCII value corresponds to a letter A-Z, convert it to its position in the alphabet
        if (code >= 65 && code <= 90) {
            result += (code - 64) + ' ';
        }
    }

    // trim any trailing space from the result string and return it
    return result.trim();
}

console.log(alphabetPositions("The sunset sets at twelve o' clock."), '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11');