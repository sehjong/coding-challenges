// PREP

// You are to write a function that takes a string as its first parameter. This string will be a string of words.

// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

// Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.

// Example

// modifyMultiply ("This is a string", 3, 5)

// P: first parameter is a string of words,
//    second parameter is an integer to find
//    the corresponding word in the given string,
//    the first word would be represented by 0,
//    third paramenter is an integer to multiply
//    the located string
// R: the multiplied located string with a hyphen between each word
// E: console.log(modifyMultiply('This is a string', 3, 5), 'string-string-string-string-string');
// P:

// create a function that takes in three parameters as arguments, a string of words, an integer, and another integer
function modifyMultiply(str, num1, num2) {
    return Array(num2).fill(str.split(' ')[num1]).join('-');
}