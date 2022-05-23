// PREP

// Simple, remove the spaces from the string, then return the resultant string.

// P: array
// R: string without spaces
// E: ['s', 't', 'r', 'i', 'n', 'g'] => ['string']
// P:

// create a function that takes in an array
function strArr(arr) {
// return the string without spaces
    return arr.split(' ').join('')
}