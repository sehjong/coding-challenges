// PREP

// Implement a function move_zeros which takes two arguments first an array of numbers arrNum and second a Boolean value isRight (default is true) and returns the array with all zero to right if isRight is true else to left if isRight is false.

// Example:

// arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
// move_zeros(arrNum, true) //=> returns [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]

// arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
// move_zeros(arrNum, false) //=> returns [0, 0, 0, 0, 12, 10, 8, 12, 7, 6, 4, 10, 12]

// arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
// move_zeros(arrNum) //=> returns [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]
// Tips: Order of other numbers should not change.

// P: an array of numbers and a boolean value, with the default value set to true
// R: the array with all zeros to the right if the boolean value is true, or to the left if it is false
// E: arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
//    move_zeros(arrNum, true) //=> returns [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]

//    arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
//    move_zeros(arrNum, false) //=> returns [0, 0, 0, 0, 12, 10, 8, 12, 7, 6, 4, 10, 12]

//    arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
//    move_zeros(arrNum) //=> returns [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]
// P:

// create a function that takes in an array of numbers and a boolean value, with the default value set to true
function move_zeros(arrNum, isRight = true) {
    let zeros = arrNum.filter((num) => num === 0);
    let nonZeros = arrNum.filter((num) => num !== 0);
    return isRight ? [...nonZeros, ...zeros] : [...zeros, ...nonZeros];
}
