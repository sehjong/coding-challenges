// PREP

// In this Kata, you will learn how to remove all empty items in an Array.

// In JavaScript, empty items in arrays can be declared by [1, 2,,,3, 4] (Multiple commas without a value in that index)

// The values that are not given a value are empty items, and usually add up with others to form <# empty items>; In the example, <2 empty items>

// [1, 2, <2 empty items>, 3, 4] should be cleared such that it should be [1, 2, 3, 4]

// Example:

// Before: [1, 2, 3, <5 empty items>, 4, <1 empty item>, null, undefined];

// After: [1, 2, 3, 4, null, undefined];

// P: an array which includes some empty indices (with no element(s))
// R: a new array with all empty elements removed
// E: Before: [1, 2, 3, <5 empty items>, 4, <1 empty item>, null, undefined];
//    After: [1, 2, 3, 4, null, undefined];
// P:

// create a function expression that takes in an array which includes some empty indices (with no element(s))
const removeEmptyItems = arr => {
    return arr.filter(e => true);
}