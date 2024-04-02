// PREP

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// Examples:

// Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false

// P: integer values a, b, and c
// R: true if a triangle can be built with the sides of given length and false in any other case
// E: Input -> Output
//    1,2,2 -> true
//    4,2,3 -> true
//    2,2,2 -> true
//    1,2,3 -> false
//    -5,1,3 -> false
//    0,2,3 -> false
//    1,2,9 -> false
// P:

// create a function that takes in integer values a, b, and c
function isTriangle(a, b, c) {
    // check if the sum of any two sides is greater than the third side
    return a + b > c && a + c > b && c + b > a;
}