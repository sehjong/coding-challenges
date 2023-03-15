// PREP

// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

// P: natural number
// R: the sum of all the cubed values from 1 to n (inclusive)
// E: (Input --> output)
//    2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
//    3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
// P:

// create a function that takes in a natural number
function sumCubes(num) {
    if(num === 1) {
        return num**3;
    }else{
        return num**3 + sumCubes(num - 1);
    }
}