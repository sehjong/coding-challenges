// PREP

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

// P: a natural number
// R: a natural number that represents the count of divisors of the input natural number
// E: 4 --> 3 // we have 3 divisors - 1, 2 and 4
//    5 --> 2 // we have 2 divisors - 1 and 5
//    12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
//    30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// P:

// create a function that takes in a natural number
function countDivisors(n) {
    // initialize counter for the number of divisors
    let count = 0;

    // natural numbers are 1, 2, 3, 4, ...,
    // whole numbers are natural numbers including 0,
    // integers are whole numbers and their negative counterpart ... -4, -3, -2, -1, 0, 1, 2, 3, 4, ...,

    // since the number 1 is the only positive integer that has exactly one divisor, which is itself,
    // and for every other positive integer n, there are at least two divisors (1 and the number itself),
    // this resolves handling 1 as a special case that can improve the efficiency of this function,
    // since 1 has only one divisor, there's no need to go through the rest of the function's logic (like the loop),
    // this immediate return for n == 1 makes this function more efficient for this specific input
    // if n is 1, return 1 since 1 has only one divisor (itself)
    if (n == 1) return 1;

    // check for perfect square
    if (n % Math.sqrt(n) == 0) count++;

    // loop from 1 to the square root of n (excluding the square root)
    for (let i = 1; i < Math.sqrt(n); i++) {
        // check if i is a divisor of n
        if (n % i == 0) {
            // if i is a divisor of n, increment count by 2 to account for both i and n/i as divisors
            count += 2;
        }
    }

    // return the total count of divisors
    return count;
}

console.log(countDivisors(4), 3);
console.log(countDivisors(5), 2);
console.log(countDivisors(12), 6);
console.log(countDivisors(30), 8);