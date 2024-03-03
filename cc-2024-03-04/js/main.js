// PREP

// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

// P: an array of numbers and potentially other types of values
// R: a number representing the sum of the cubes of odd numbers found in the input array,
//    or undefined if any value in the array is not a number
// E: console.log(sumOfCubedOddNums([1, 2, 3, 4]), 28);
//    console.log(sumOfCubedOddNums([-5, -5, 5, 5]), 0);
//    console.log(sumOfCubedOddNums(['a', 2, 3, 4]), undefined);
// P:

// create a function expression that takes in an array of numbers and potentially other types of values
let sumOfCubedOddNums = arrNums => {
    // check if all elements in the array are numbers
    let nums = arrNums.every(e => !isNaN(e));
    // if all elements are numebers, filter the odd numbers, cube them, and sum them up
    // otherwise, return undefined
    return nums ? arrNums.filter(e => e % 2).reduce((sum, e) => sum + (e * e * e), 0) : undefined;
}