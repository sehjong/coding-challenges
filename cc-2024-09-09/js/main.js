// PREP

/*
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

// P: a number
// R: the number multiplied by 8 if even, or 9 if odd
// E: console.log(multiplyEvenOdd(2), 16);
//    console.log(multiplyEvenOdd(1), 9);
//    console.log(multiplyEvenOdd(8), 64);
// P:

// create a function that takes in a number
function multiplyEvenOdd(num) {
    // check if the number is even, if so multiply by 8,
    // otherwise multiply by 9
    return num * (num % 2 === 0 ? 8 : 9);
}

console.log(multiplyEvenOdd(2), 16);
console.log(multiplyEvenOdd(1), 9);
console.log(multiplyEvenOdd(8), 64);