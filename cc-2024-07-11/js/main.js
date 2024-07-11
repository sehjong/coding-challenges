// PREP

/*
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
*/

// P: a string of words
// R: a string where every other word in the input string is reversed
// E: console.log(reverse('Did it work?'), 'Did ti work?');
//    console.log(reverse('I really hope it works this time...'), 'I yllaer hope ti works siht time...');
//    console.log(reverse('Reverse this string, please!'), 'Reverse siht string, !esaelp');
// P:

// create a function that takes in a string of words
function reverse(str) {
    // split the input string into an array of words
    let arr = str.split(' ');

    // iterate over the array, reversing every other word
    for (let i = 1; i < arr.length; i += 2) {
        arr[i] = arr[i].split('').reverse().join('');
    }

    // join the array back into a string with single spaces between words and return the result
    return arr.join(' ').trim();
}

console.log(reverse('Did it work?'), 'Did ti work?');
console.log(reverse('I really hope it works this time...'), 'I yllaer hope ti works siht time...');
console.log(reverse('Reverse this string, please!'), 'Reverse siht string, !esaelp');