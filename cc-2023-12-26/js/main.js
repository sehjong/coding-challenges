// PREP

// Write a function that returns the number of arguments it received.

// args_count() --> 0
// args_count('a') --> 1
// args_count('a', 'b') --> 2

// P: a variable number of arguments
// R: an integer representing the count of arguments received by the function as parameters
// E: args_count() --> 0
//    args_count('a') --> 1
//    args_count('a', 'b') --> 2
// P:

// create a function args_count() that takes a variable number of arguments
function args_count() {
// use the locally available arguments object for non-arrow syntax functions,
// which contains the values passed to this function as an array-like object,
// to return the count of each argument received by the function,
// with the length property
    return arguments.length;
}

console.log(args_count(), 0);
console.log(args_count('a'), 1);
console.log(args_count('a', 'b'), 2);