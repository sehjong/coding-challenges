// PREP

/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of test is 64 (20 + 5 + 19 + 20).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

// P: a string of words
// R: the string representing the word with the highest score,
//    each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.,
//    if two words have the same score, the word that appears first in the input string is returned
// E: console.log(highestScoringWord('abc cba'), 'abc');
//    console.log(highestScoringWord('test', 'case'), 'test');
//    console.log(highestScoringWord('this is a test sentence with words of varying scores'), 'varying');
// p:

// create a function that takes in a string of words
function highestScoringWord(str) {
    // helper function to calculate the score of a word
    function calculateWordScore(word) {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let score = 0;
        for (let char of word) {
            score += alphabet.indexOf(char) + 1;
        }
        return score;
    }

    // split the input string into an array of words
    const words = str.split(' ');

    // map each word to its score
    const scores = words.map(calculateWordScore);

    // find the index of the word with the highest score
    let highestScoreIndex = 0;
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > scores[highestScoreIndex]) {
            highestScoreIndex = i;
        }
    }

    // return the word with the highest score
    return words[highestScoreIndex];
}