// PREP

/*
Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
*/

// P: an array of letters
// R: a string representing the missing letter in the array
// E: ['a','b','c','d','f'] -> 'e'
//    ['O','Q','R','S'] -> 'P'
// P:

// create a function that takes in an array of letters
function missingLetter(arr) {
    // get the ASCII code of the first letter in the array
    let firstLetter = arr[0].charCodeAt(0);

    // loop through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // check if the ASCII code of the current letter is equal to first + i
        if (firstLetter + i !== arr[i].charCodeAt(0)) {
            // if not, return the letter corresponding to first + i
            return String.fromCharCode(firstLetter + i);
        }
    }

    // throw an error if no missing letter is found, which should not happen with a valid input
    throw new Error("Invalid input");
}

console.log(missingLetter(['a', 'b' ,'c' ,'d' ,'f']), 'e');
console.log(missingLetter(['O', 'Q', 'R', 'S']), 'P');