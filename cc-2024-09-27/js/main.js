// PREP

/*
In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]
*/

// P: an array
// R: the array with elements in reverse order
// E: [1, 2, 3, 4]  -> [4, 3, 2, 1]
//    [9, 2, 0, 7]  -> [7, 0, 2, 9]
// P:

// create a function that takes in an array
function reverseList(arr) {
    // use the reverse() method to reverse the elements in the array
    return arr.reverse();
}

console.log(reverseList([1, 2, 3, 4]), [4, 3, 2, 1]);
console.log(reverseList([9, 2, 0, 7]), [7, 0, 2, 9]);