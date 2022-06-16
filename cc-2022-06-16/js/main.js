// PREP

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// P: words and integers
// R: a string of s repeated exactly n times
// E: 6, "I"     -> "IIIIII"
//    5, "Hello" -> "HelloHelloHelloHelloHello"
// P:

// create a function that takes in an integer n and a string s as parameters
function repeatStrNum(num, str) {
    return str.repeat(num);
}