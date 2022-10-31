// PREP

// Write a function that finds the sum of all its arguments.

// eg:

// sum(1, 2, 3) // => 6
// sum(8, 2) // => 10
// sum(1, 2, 3, 4, 5) // => 15

// P: integers only
// R: the sum of all its arguments
// E: sum(1, 2, 3) // => 6
//    sum(8, 2) // => 10
//    sum(1, 2, 3, 4, 5) // => 15
// P:

// create a function that takes in numbers
function sum() {
    let total = 0;
    for(let i in arguments) {
        total += arguments[i];
    }
    total;
}