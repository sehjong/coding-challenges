// PREP

// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

// P: string
// R: the index of which vowel is missing from a given string
// E: "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
//    "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
// P:

// create a function that takes in a string
function absentVowel(str) {
    let vowels = 'aeiou';
    for(let i in vowels) {
        if(str.toLowerCase().indexOf(vowels[i]) == -1) {
            return Number(i);
        }
    }
}