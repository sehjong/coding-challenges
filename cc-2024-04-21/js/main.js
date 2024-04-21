// PREP

// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

// Good luck!

// P: an array of strings, where each string is a word composed of alphabet letters,
//    both uppercase and lowercase letters may be included
// R: an array of numbers, each number represents the count of letters in the corresponding word from the input array,
//    that are in the same position as they are in the alphabet
// E: solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// P:

// create a function that takes in an array of strings, where each string is a word composed of alphabet letters,
// both uppercase and lowercase letters may be included
function solve(arr) {
    // define the alphabet for reference
    let abc = 'abcdefghijklmnopqrstuvwxyz'

    // map over the array of words to transform each word,
    // convert each word to lowercase and split it into characters,
    // filter characters that are in the position they would be in the alphabet,
    // check if the index of the character in the word is the same as,
    // its index in the alphabet (using indexOf on the alphabet string),
    // return the length of the resulting array from filter, which is the count of,
    // characters that are in their correct alphabetical position
    return arr.map(x => x.toLowerCase().split('').filter((e, i) => i == abc.indexOf(e)).length);
}

console.log(solve(['abode', 'ABc', 'xyzD']), [4, 3, 1]);