// PREP

// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

// P: integer n > 1
// R: an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime'
// E: divisors(12); // should return [2,3,4,6]
//    divisors(25); // should return [5]
//    divisors(13); // should return "13 is prime"
// P:

// create a function that takes in an integer n >1
function divisors(integer) {
    let arr = [];
    for(let i = 2; i < integer; i++) {
        if(integer % 1 == 0) {
            arr.push(i);
        }
    }
}
