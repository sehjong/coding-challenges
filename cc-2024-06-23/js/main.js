// PREP

/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

// P: a string
// R: an object where the keys are the characters from the string,
//    and the values are the counts of how many times each character appears in the string
// E: console.log(count(''), {});
//    console.log(count('ab'), {'a': 1, 'b': 1});
//    console.log(count('aba'), {'a': 2, 'b': 1});
// P:

// create a function that takes in a string
function count(str) {
    // initialize an empty object to store character counts
    const count = {};

    // split the string into an array of characters and iterate over each character
    str.split('').forEach(function(char) {
        // if the character is already a key in the count object, increment its value by 1,
        // otherwise, add the character as a key with a value of 1
        count[char] ? count[char]++ : count[char] = 1;
    })

    // return the object containing character counts
    return count;
}