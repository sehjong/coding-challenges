// PREP

// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

// P: a string with a length greater than 0
// R: a string with each letter moved forward 10 letters through the alphabet
// E: console.log(moveTen('testcase'), 'docdmkco');
//    console.log(moveTen('hello world'), 'rovvy gybvn');
//    console.log(moveTen('abcxyz'), 'klmhij');
// P:

// create a function that takes in a string with a length greater than 0
function moveTen(str) {
    const shift = 10;
    const abc = 'abcdefghijklmnopqrstuvwxyz';

    return str
        .split('')
        .map(e => {
            if (abc.includes(e.toLowerCase())) {
                const isUpperCase = e === e.toUpperCase();
                const i = (abc.indexOf(e.toLowerCase()) + shift) % 26;
                return isUpperCase ? abc[i].toUpperCase() : abc[i];
            }
            return e;
        })
}