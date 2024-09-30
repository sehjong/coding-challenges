// PREP

/*
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.
*/

// P: two numbers representing two interior angles of a triangle
// R: the missing interior angle of the triangle,
//    the sum of the three angles of the triangle must equal 180°
// E: console.log(findMissingAngle(30, 60), 90);
//    console.log(findMissingAngle(60, 60), 60);
//    console.log(findMissingAngle(43, 78), 59);
// P:

// create a function that takes in two numbers representing two interior angles of a triangle
function findMissingAngle(angleOne, angleTwo) {
    // subtract the sum of the two angles from 180 to get the third angle
    return 180 - (angleOne + angleTwo);
}

console.log(findMissingAngle(30, 60), 90);
console.log(findMissingAngle(60, 60), 60);
console.log(findMissingAngle(43, 78), 59);