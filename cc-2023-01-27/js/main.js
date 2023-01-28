// PREP

// Write the definition of the function "say" such that calling this:

// say("Hello")("World")
// returns "Hello World"

// P: string
// R: "Hello World"
// E: console.log(say('Hello')('World'), 'Hello World');
// P:

// create a function expression that takes in a string
let say = function(str1) {
    return function(str2) {
        return `${str1} ${str2}`;
    }
}