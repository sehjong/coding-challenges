// PREP

// Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. The order of the uppercase and lowercase words should be the order in which they occur.

// If a word starts with a number or special character, skip the word and leave it out of the result.

// Input String will not be empty.

// For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"

// P: a string
// R: a string where uppercase words are at the beginning, followed by lowercase words
// E: "hey You, Sort me Already!" -> "You, Sort Already! hey me"
// P:

// create a function that takes in a string
function sortWords(str) {
    return str
        .split(' ')
        .filter(word => {
            const firstChar = word[0];
            return (firstChar >= 'a' && firstChar <='z') || (firstChar >= 'A' && firstChar <= 'Z');
        })
        .sort((a, b) => {
            const aFirstChar = a[0];
            const bFirstChar = b[0];
            return aFirstChar < 'a' && bFirstChar >= 'a' ? -1 : aFirstChar >= 'a' && bFirstChar < 'a' ? 1 : 0;
        })
}