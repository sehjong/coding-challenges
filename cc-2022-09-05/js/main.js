// PREP

// Write a function that returns the number of occurrences of an element in an array.

// Examples
// var arr = [0, 1, 2, 2, 3];
// arr.numberOfOccurrences(0) === 1;
// arr.numberOfOccurrences(4) === 0;
// arr.numberOfOccurrences(2) === 2;
// arr.numberOfOccurrences("a") === 0;

// P: an array of strings and integers
// R: the number of occurrences of an element in an array
// E: var arr = [0, 1, 2, 2, 3];
//    arr.numberOfOccurrences(0) === 1;
//    arr.numberOfOccurrences(4) === 0;
//    arr.numberOfOccurrences(2) === 2;
//    arr.numberOfOccurrences("a") === 0;
// P:

// extend Array.prototype with a method to create a function that takes in an array of numbers and strings
Array.prototype.numberOfOccurrences = function(num) {
// use the filter() method and length property on this array object 
    this.filter(x => x === num).length;
}