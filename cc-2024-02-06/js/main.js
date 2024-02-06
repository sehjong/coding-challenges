// PREP

// A colleague asked if you can help him fix his function. It seems it doesn't always parse Integers correctly.

// Examples:

// parseNumbers(['10']) // should return [10]
// parseNumbers(['-1','0','1']) // should return [-1,0,1]

// P: an array of integers in the form of strings
// R: an array of integers converted from string format to integer format
// E: parseNumbers(['10']) // should return [10]
//    parseNumbers(['-1','0','1']) // should return [-1,0,1]
// P:

// create a function that takes in an array of integers in the form of strings
function parseNumbers(intStr) {
    // use the map function to iterate over each element in the input array
    return intStr.map(function(i) {
        // convert each string to an integer using parseInt and return the new array
        return parseInt(i);
    });
}