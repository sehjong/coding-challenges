// PREP

/*
In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata.
*/

// P: a number
// R: true if even and false if odd,
//    floats with a non-zero decimal value are considered odd for this challenge
// E: console.log(isEvenNumber(2), true);
//    console.log(isEvenNumber(0.5), false);
//    console.log(isEvenNumber(-3), false);
//    console.log(isEvenNumber(-2), true);
// P:

// create a function that takes in a number
function isEvenNumber(n) {
    // check if the number is divisible by 2 with no remainder
    return n % 2 === 0 ? true : false;
}