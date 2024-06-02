// PREP

// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

// P: a number
// R: an array of numbers from 1 to N with the following substitutions,
//    'Fizz' for multiples of 3,
//    'Buzz' for multiples of 5,
//    'FizzBuzz' for multiples of both 3 and 5
// E: console.log(fizzBuzz(3), [1, 2, 'Fizz']);
//    console.log(fizzBuzz(10), [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']);
//    console.log(fizzBuzz(20), [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz', 19, 'Buzz']);
// P:

// create a functon that takes in a number
function fizzBuzz(num) { 
    const result = [];

    for (let i = 1; i <= num; i++) {
        // this condition must be checked first to ensure 'FizzBuzz' is evaluated,
        // since separate if statements are evaluated separately,
        // and else if statements are evaluated until the first true condition and stops
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(i);
        }
    }

    return result;
}

console.log(fizzBuzz(3), [1, 2, 'Fizz']);
console.log(fizzBuzz(10), [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']);
console.log(fizzBuzz(20), [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz', 19, 'Buzz']);