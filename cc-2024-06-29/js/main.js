// PREP

/*
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

// P: an array of numbers
// R: a new array where all the odd numbers are sorted in ascending order,
//    but the even numbers remain in their original positions
// E: [7, 1]  =>  [1, 7]
//    [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
//    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
// P:

// create a function that takes in an array of numbers
function sortArray(array) {
    // filter the array to get all odd numbers
    const odd = array.filter((e) => e % 2).sort((a, b) => a - b);
    // map the original array, replacing odd numbers with sorted ones
    return array.map((e) => e % 2 ? odd.shift() : e);
}