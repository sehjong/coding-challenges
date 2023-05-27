// PREP

// Say hello!

// Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil/None if input is empty string or null/nil/None.

// Example:

// greet("Niks") === "hello Niks!";
// greet("") === null; // Return null if input is empty string
// greet(null) === null; // Return null if input is null

// P: string
// R: append 'hello' to input string,
//    null/nil/None if input is empty string or null/nil/None
// E: greet("Niks") === "hello Niks!";
//    greet("") === null; // Return null if input is empty string
//    greet(null) === null; // Return null if input is null
// P: 

// create a function that takes in a string
function greet(name) {
    return name ? `hello ${name}!` : null;
}