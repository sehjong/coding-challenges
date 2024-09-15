// PREP

/*
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Notes:

If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)
*/

// P: two numbers, but in the form of strings
// R: the sum of the two numbers as a string
// E: "4",  "5" --> "9"
//    "34", "5" --> "39"
//    "", "" --> "0"
//    "2", "" --> "2"
//    "-5", "3" --> "-2"
// P:

// create a function that takes in two numbers, but in the form of strings
function sumStr(num1, num2) {
    // convert both string inputs to numbers, sum them, and convert the result back to a string
    return String(Number(num1) + Number(num2));
}

console.log(sumStr('4', '5'), '9');
console.log(sumStr('34', '5'), '39');
console.log(sumStr('', ''), '0');
console.log(sumStr('', ''), '');
console.log(sumStr('2', ''), '2');
console.log(sumStr('-5', '3'), '-2');