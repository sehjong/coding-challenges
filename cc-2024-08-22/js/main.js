// PREP

/*
In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

"Hello!" => "Holle!"
"Tomatoes" => "Temotaos"
"Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
For simplicity, you can treat the letter y as a consonant, not a vowel.

Good luck!
*/

// P: a string
// R: a new string where the vowels have been reversed, while non-vowel characters remain unchanged
// E: "Hello!" => "Holle!"
//    "Tomatoes" => "Temotaos"
//    "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
// P:

// create a function expression that takes in a string
const reverseVowels = (str) => {
    // helper function to check if a character is a vowel
    const checkVowels = char => ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
    // split the string into an array of characters
    const arr = str.split('');
    // filter out the vowels from the array
    const vowels = arr.filter(char => checkVowels(char));
    // map through the characters, replacing vowels with the reversed vowels
    return arr.map(char => checkVowels(char) ? vowels.pop() : char).join('');
}