// PREP

// Your task is to take a given range and return an array of the prime numbers in that range.

// You will write a function with the following parameters:

// start is the integer from which your range starts. (inclusive)

// end is the integer at which your range ends. (inclusive)

// If the range does not contain any prime numbers return null.

// Examples:

// primes(5, 7)  // [5, 7]
// primes(8, 9)  // null
// primes(1, 10) // [2, 3, 5, 7]

// P: an integer representing the start of the range (inclusive),
//    and an integer representing the end of the range (inclusive)
// R: an array of prime numbers within the specified range,
//    if there are no prime numbers, return null
// E: primes(5, 7)  // [5, 7]
//    primes(8, 9)  // null
//    primes(1, 10) // [2, 3, 5, 7]
// P:

// create a helper function expression that takes an integer as input
const isPrime = (num) => {
// if num is not an integer greater than or equal to 2, return false
    if (num % 1 || num < 2) return false;
// calculate the square root of num and store it in a variable sqrtNum
    let sqrtNum = Math.sqrt(num);
// use a loop to iterate from 2 to sqrtNum,
// if num is divisible by any number in this range, return false
    for (let i = 2; i <= sqrtNum; i++) if (!(num % i)) return false;
// if none of the numbers in the loop divided num, return true, indicating that num is prime
    return true;
}

// create a function expression that takes in an integer representing the start of the range (inclusive),
// and an integer representing the end of the range (inclusive)
const primes = (start, end) => {
// initialize an empty array to store prime numbers
    let arr = [];
// use a loop to iterate from start to end,
// for each number i in the range,
    for (let i = start; i <= end; i++) {
// check if it is prime using the isPrime helper function expression,
        if (isPrime(i)) arr.push(i); // if i is prime, push it into the array
    }
}