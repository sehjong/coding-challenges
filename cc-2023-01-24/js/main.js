// PREP

// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.

// Examples
// [4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
// []                               -->  0

// P: whole numbers, no floated values
// R: the sum of the even values
// E: [4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
//    []                               -->  0
// P:

// create a function that takes in an array of whole numbers
function sumEvenNums(arrNums) {
    return arrNums.filter(function(el) {
        return el % 2 == 0;
    }).reduce(function(a, b) {
        return a + b;
    })
}