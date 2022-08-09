// PREP

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// P: natural numbers, whole numbers
// R: digits in descending order
// E: Input: 42145 Output: 54421
//    Input: 145263 Output: 654321
//    Input: 123456789 Output: 987654321
// P:

// create a function that takes in any natural or whole number
function descendingOrder(num) {
    return parseInt(String(num).split('').sort().reverse().join(''));
}