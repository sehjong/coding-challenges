// PREP

/*
You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'
*/

// P: a string
// R: the input string inside out, whereby the internal letters will move out, and the external letters move toward the center
// E: 'taxi' -> 'atix'
//    'taxis' -> 'atxsi'
// P:

// create a function expresion that takes in a string
const insideOut = (str) => {
    // split the string into an array of words and map through each word
    return str.split(' ').map(x => {
        // calculate the left half of the word, reverse it, and join it back into a string
        let left = x.substring(0, Math.floor(x.length / 2)).split('').reverse().join('');
        // calculate the right half of the word, reverse it, and join it back into a string
        let right = x.substring(Math.ceil(x.length / 2)).split('').reverse().join('');
        // determine the middle character for words with an odd length
        let middle = x[Math.floor(x.length / 2)];
        // return the transformed word based on whether the word length is odd or even
        return x.length % 2 ? left + middle + right : left + right;
    // join the transformed words back into a single string
    }).join(' ');
}

console.log(insideOut('taxi'), 'atix');
console.log(insideOut('taxis'), 'atxsi');