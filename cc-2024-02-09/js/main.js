// PREP

// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

// Examples:

// [1, -1, 2, -2, 3] => 3

// 3 has no matching negative appearance

// [-3, 1, 2, 3, -1, -4, -2] => -4

// -4 has no matching positive appearance

// [1, -1, 2, -2, 3, 3] => 3

// (the only-positive or only-negative integer may appear more than once)

// Good luck!

// P: an array of integers whose elements have both a negative and a positive value, except for one integer,
//    the only-positive or only-negative integer may appear more than once
// R: an integer that is the only integer in the array that does not have a matching negative or positive counterpart
// E: [1, -1, 2, -2, 3] => 3
//    3 has no matching negative appearance
//    [-3, 1, 2, 3, -1, -4, -2] => -4
//    -4 has no matching positive appearance
//    [1, -1, 2, -2, 3, 3] => 3
//    (the only-positive or only-negative integer may appear more than once)
// P:

// create a function expression that takes in an array of integers whose elements have both a negative and a positive value, except for one integer,
// the only-positive or only-negative integer may appear more than once,
// iterate over the array using the find method to search for the first element in the array,
// that does not have an opposite sign counterpart, and implicitly return that integer,
// given the coding challenge's requirements, finding the first element once, which is a single unique integer, satisfies the condition,
// even if this integer appears more than once, and is sufficient to solve the problem,
// stopping the search after finding the first occurrence of the unique integer makes the function more efficient,
// especially for large arrays
const solve = intArr => intArr.find(e => !intArr.includes(-e));