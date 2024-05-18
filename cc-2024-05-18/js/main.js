// PREP

// Implement a function that returns the minimal and the maximal value of a list (in this order).

// P: an array of integers
// R: an array with two elements,
//    the first element is the minimal value in the input array,
//    the second element is the maximal value in the input array
// E: console.log(getMinMax([1]), [1, 1]);
//    console.log(getMinMax([1, 2]), [1, 2]);
//    console.log(getMinMax([2, 1]), [1, 2]);
// P:

// create a function that takes in an array of integers
function getMinMax(arrNums) {
    // use the spread operator to pass array elements to Math.min and Math.max,
    // return an array with the minimum value as the first element,
    // and the maximum value as the second element
    return [Math.min(...arrNums), Math.max(...arrNums)];
}

console.log(getMinMax([1]), [1, 1]);
console.log(getMinMax([1, 2]), [1, 2]);
console.log(getMinMax([2, 1]), [1, 2]);