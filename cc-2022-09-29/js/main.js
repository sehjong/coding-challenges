// PREP

// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

// P: an array of numbers, integers; the function will have two parameters that will take in an array of numbers (first parameter) and a string (second parameter); the array will not ever be empty and will contain at least one number and no duplicate numbers, the string will determine whether the function should return the 'value' or the 'index' of the smallest number in the array
// R: the smallest value of an array or the index of that value
// E: min([1,2,3,4,5], 'value') // => 1
//    min([1,2,3,4,5], 'index') // => 0
// P:

// create a function that takes in an array of numbers and a string 'value' or 'index'
function min(intArr, toReturn) {
    let val = Math.min.apply(null, intArr);
    toReturn == 'value' ? val : intArr.indexOf(val);
}