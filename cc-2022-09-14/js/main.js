// PREP

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// P: integers only
// R: the square of every digit of a number concatenated
// E: 9119 through the function will return 811181 because 92 is 81 and 12 is 1
// P:

// create a function that takes in a number
function squareDigits(num) {
    const square = n => n**2;
    Number(('' + num).split('').map(Number).map(square).join(''));
}