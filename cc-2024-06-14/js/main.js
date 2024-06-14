// PREP

/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

// P: a number
// R: the sum of all the multiples of 3 or 5 below the number passed in
// E: console.log(solution(10), 23);
//    console.log(solution(20), 78);
//    console.log(solution(0), 0);
// P:

// create a function that takes in a number
function solution(num) {
    // if the input number is less than or equal to 0, return 0
    if (num <= 0) {
        return 0;
    }

    // initialize the sum of multiples to 0
    let sum = 0;

    // loop through all numbers from 0 up to but not including the given number
    for (let i = 0; i < num; i++) {
        // check if the current number is a multiple of 3 or 5
        if (i % 3 === 0 || i % 5 === 0) {
            // add the current number to the sum
            sum += i;
        }
    }

    // return the sum of multiples
    return sum;
}

console.log(solution(10), 23);
console.log(solution(20), 78);
console.log(solution(0), 0);