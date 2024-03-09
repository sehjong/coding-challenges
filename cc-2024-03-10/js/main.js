// PREP

// Write reverseList function that simply reverses lists.

// P: an array of elements of any type
// R: an array that is the reverse of the input array
// E: console.log(reverseList([1, 2, 3, 4]), [4, 3, 2, 1]);
//    console.log(reverseList([4, 'orange', 2, 'sky']), ['sky', 2, 'orange', 4]);
//    console.log(reverseList([]), []);
// P:

// create a function that takes in an array of elements of any type
function reverseList(arr) {
    // use the reverse method to reverse the array in place and return it
    return arr.reverse();
}