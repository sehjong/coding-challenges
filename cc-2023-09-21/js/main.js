// PREP

// Your job is to add a method 'sum' to all array objects, which sums all the numbers in it. You should return 0 if the array is empty.

// For example:

// var arr = [1,2,3,4];
// arr.sum();  //returns 10

// var arr = [10, 28, 14, 33];
// arr.sum(); //returns 85
// Good luck!

// P: the function 'sum' should be added as a method
// R: the sum of all the numbers in the array, if the array is empty, it should return 0
// E: var arr = [1,2,3,4];
//    arr.sum();  //returns 10
//    var arr = [10, 28, 14, 33];
//    arr.sum(); //returns 85
// P:

// create a method called 'sum' to the prototype of the Array object
Array.prototype.sum = function () {
    this.reduce((acc, c) => acc + c, 0);
}