// PREP

// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.

// Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47

// P: natural number
// R: the sum, all elements of the sum are the results of integer division
// E: 25  =>  25 + 12 + 6 + 3 + 1 = 47
// P:

//create a function that takes in a natural number
function halvingSum(num) {
    if(num === 1) return num;
    return num + halvingSum(Math.floor(num / 2));
}

console.log(halvingSum(25), 47); // returns 47 47