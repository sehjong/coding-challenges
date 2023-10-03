// PREP

// The Ones' Complement of a binary number is the number obtained by swapping all the 0s for 1s and all the 1s for 0s. For example:

// onesComplement(1001) = 0110
// onesComplement(1001) = 0110
// For any given binary number,formatted as a string, return the Ones' Complement of that number.

// P: binary number formatted as a string
// R: the ones complement of that number
// E: onesComplement(1001) = 0110
// P:

// create a function that takes in a binary number formatted as a string
function onesComplement(n) {
    return [...n].map(e => e === '0' ? '1' : '0').join('');
}