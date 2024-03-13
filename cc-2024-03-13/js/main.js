// PREP

// Task
// Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

// Notes
// Multiple correct answers may be possible. In this case, return any one of them.
// The given index will be inside the given array.
// The given array will, therefore, never be empty.

// Example
// leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
// leastLarger( [4, 1, 3, 5, 6], 4 )  => -1

// P: an array of numbers and an index within that array
// R: the index of the smallest number that is larger than the element at the given index,
//    or -1 if there is no such index
// E: leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
//    leastLarger( [4, 1, 3, 5, 6], 4 )  => -1
// P:

// create a function expression that takes in an array of numbers and an index within that array,
// use the indexOf method to find and return the index of the smallest number in the array,
// that is larger than the element at the provided index, this process involves
// applying the spread syntax "..." to expand elements of a filtered array where each element is, 
// filtered to include only those that are larger than the element at the given index,
// Math.min is then used to calculate the smallest number among these larger elements,
// if no such element exists (meaning all elements are smaller or equal), indexOf returns -1,
// indicating the absence of a larger element
const leastLarger = (arr, i) => arr.indexOf(Math.min(...arr.filter(e => e > arr[i])));