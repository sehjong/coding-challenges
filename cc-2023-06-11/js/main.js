// PREP

// Write a function that takes an integer in input and outputs a string with currency format.

// Integer in currency format is expressed by a string of number where every three characters are separated by comma.

// For example:

// 123456 --> "123,456"
// Input will always be an positive integer, so don't worry about type checking or negative/float values.

// P: whole numbers, no floats
// R: the whole number as a string formatted so that every third character is separated by a comma
// E: 123456 --> "123,456"
// P:

// create a function that takes in a whole number
function toStr(num) {
    num.toLocaleString();
}