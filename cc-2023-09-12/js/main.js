// PREP

// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

// P: a string of text
// R: the number of consonants in the string
// E: console.log(countConsonants('abcdefghijklmnopqrstuvwxyz'), 21);
//    console.log(countConsonants('ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 21);
//    console.log(countConsonants('aeiouAEIOU'), 0);
// P:

// create a function that takes in a string of text
function countConsonants(str) {
    let consonantCount = 0;
    const lowerCaseStr = str.toLowerCase();
    const vowels = 'aeiou';

    for (let i = 0; i < lowerCaseStr.length; i++) {
        const char = lowerCaseStr[i];
            if (char >= 'a' && char <= 'z' && !vowels.includes(char)) {
                consonantCount++;
            }
    }
    return consonantCount;
}