// PREP

// Write a function that reverses the bits in an integer.

// For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.

// You can assume that the number is not negative.

// P: a number
// R: a number that represents the reverse binary of the input number
// E: console.log(reverseBinary(417), 267);
//    console.log(reverseBinary(267), 417);
//    console.log(reverseBinary(0), 0);
// P:

// create a function that takes in a number
function reverseBinary(num) {
    // convert the number to its binary representation,
    // split the binary string into an array of characters,
    // reverse the array of characters,
    // join the reversed array back into a string
    const binaryReverse = num.toString(2).split('').reverse().join('');
    // convert the reversed binary string back to a number and return it
    return parseInt(binaryReverse, 2);
}