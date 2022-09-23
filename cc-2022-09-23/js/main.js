// PREP

// Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

// Example:

// * With input "The quick brown fox jumps over the lazy dog", 4
// * Return ['quick', 'brown', 'jumps']

// P: a string and an integer n as parameters
// R: a list of all words that are longer than n
// E: With input "The quick brown fox jumps over the lazy dog", 4
//    Return ['quick', 'brown', 'jumps']
// P:

// create a function that takes in a string and an integer n as parameters
function filterLongWords(sentence, n) {
    return sentence.split('').filter(x => x.length > n);
}