// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function valDoubled(arr){
    return arr.map(num => num * 2);
}

valDoubled([1, 2, 3]);
console.log(valDoubled([1, 2, 3]));