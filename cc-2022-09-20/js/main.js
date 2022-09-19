// PREP

// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

// P: string as name of letters only, no spaces
// R: the string with a greeting, capitalized and ending with an exclamation point
// E: "riley" --> "Hello Riley!"
//    "JACK"  --> "Hello Jack!"
// P:

// extend String.prototype with a method to create a function that takes in a string
String.prototype.capitalize = function() {
// use the charAt() method on this string object to return a character at the index of position [0] and the toUpperCase() method to capitalize that character, concatenate
// and use the slice() method to retrieve a section of this string object beginning from the index supplied to the end of the string and return it as a new string with the toLowerCase() method applied
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

// create a function expression that takes in a string
let greet = function(name) {
// return the string with 'Hello' and the capitalize() method applied to it with an exclamation point
    return 'Hello' + name.capitalize() + '!';
}