// PREP

/*
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

// P: a boolean input, which can either be true or false
// R: a string, either 'Yes' if the input is true, or 'No' if the input is false
// E: true -> 'Yes'
//    false -> 'No'
// P:

// create a function that takes in a boolean input, which can either be true or false
function booleanToString(value) {
    // use the ternary operator to check if the input is true or false,
    // return 'Yes' if the input is true, and 'No' if the input is false
    return value ? 'Yes' : 'No';
}

console.log(booleanToString(true), 'Yes');
console.log(booleanToString(false), 'No');