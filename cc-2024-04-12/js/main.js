// PREP

// Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

// Example:

// (6,1,3)--> true because 6 is divisible by 1 and 3
// (12,2)--> true because 12 is divisible by 2
// (100,5,4,10,25,20)--> true
// (12,7)--> false because 12 is not divisible by 7

// P: an initial number whose divisibility is to be tested,
//    and one or more numbers to check as potential divisors
// R: true if the initial number is divisible by all provided potential divisors,
//    false if the initial number is not divisible by any one of the provided potential divisors,
//    true by default if no potential divisors are provided, since there are no divisibility checks to perform
// E: (6,1,3)--> true because 6 is divisible by 1 and 3
//    (12,2)--> true because 12 is divisible by 2
//    (100,5,4,10,25,20)--> true
//    (12,7)--> false because 12 is not divisible by 7
// P:

// create a function that takes in an initial number whose divisibility is to be tested,
// and one or more numbers to check as potential divisors
function isDivisible(firstNum, ...otherNums) {

}