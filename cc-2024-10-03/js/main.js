// PREP

/*
Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
*/

// P: an array of numbers
// R: the sum of all the numbers except the highest and lowest values
// E: console.log(sumArray([6, 2, 1, 8, 10]), 16);
//    console.log(sumArray([1, 1, 11, 2, 3 ]), 6);
//    console.log(sumArray([null]), 0);
//    console.log(sumArray([ ]), 0);
//    console.log(sumArray([1]), 0);
// P:

// create a function that takes in an array of numbers
function sumArray(array) {

    // if the array is null or has two or fewer elements, return 0
    if (array == null || array.length <= 2) {
        return 0;
    }

    // find the maximum and minimum values in the array
    let max = Math.max(...array);
    let min = Math.min(...array);

    // calculate the sum of all elements in the array
    let sum = array.reduce((acc, c) => acc + c, 0);

    // return the sum minus the maximum and minimum values
    return sum - max - min;

}