// PREP

// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

// Example:

// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'
// Notes
// The given string will never be empty.
// The length of the array is always one less than the length of the string.
// All numbers are valid.
// There can be duplicate letters and numbers.

// P: string of letters and an array of numbers, given string will never be empty, length of the array is always one less than the length of the string, there is no empty space, all numbers are valid, there can be duplicate letters and numbers
// R: after each removal the size of the string decreases, return the only letter left
// E: let str = "zbk", arr = [0, 1]
//        str = "bk", arr = [1]
//        str = "b", arr = []
//        return 'b'
// P:

// create a function that takes in a string of letters and an array of numbers
function lastSurvivor(letters, coords) {
    letters = letters.split('');
    for(let i = 0; i < coords.length; i++) {
        letters.splice(coords[i], 1);
    }
    return letters.join('');
}
console.log(lastSurvivor('zbk', [0, 1]), 'b');