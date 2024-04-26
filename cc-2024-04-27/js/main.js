// PREP

// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

// e.g. transposeTwoStrings(['Hello','World']);

// should return

// H W  
// e o  
// l r  
// l l  
// o d

// P: an array containing exactly two strings
// R: a single string that represents the two input strings transposed,
//    each character from the strings is separated by a space and placed vertically,
//    if one string is shorter, spaces are used to align with the longer string's characters
// E: e.g. transposeTwoStrings(['Hello','World']);
//    should return
//    H W  
//    e o  
//    l r  
//    l l  
//    o d
// P:

// create a function expression that takes in an array containing exactly two strings
const transposeTwoStrings = arrStr => {
    // destructure the array to obtain the two words and convert them to arrays of characters
    const [word1, word2] = arrStr.map(word => word.split(''));
    // determine the length of the longer word
    const longestLength = Math.max(word1.length, word2.length);
    // initialize variables to hold the characters from each word for each iteration
    let char1 = '';
    let char2 = '';
    // initialize the result string
    let res = '';

    // iterate over the length of the longer word
    for (let i = 0; i < longestLength; i++) {
        // use the current index to get the character from each word or default to a space if out of bounds
        char1 = word1[i] ?? ' ';
        char2 = word2[i] ?? ' ';

        // append the transposed characters to the result string, add a newline except for the last pair
        if (i === longestLength - 1) {
            res += `${char1} ${char2}`;
        } else {
            res += `${char1} ${char2}\n`;
        }
    }

    // return the final transposed string
    return res;
}