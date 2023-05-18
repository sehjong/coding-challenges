// PREP

// Given an array, return the difference between the count of even numbers and the count of odd numbers. 0 will be considered an even number.

// For example:
// solve([0,1,2,3]) = 0 because there are two even numbers and two odd numbers. Even - Odd = 2 - 2 = 0.  
// Let's now add two letters to the last example:

// solve([0,1,2,3,'a','b']) = 0. Again, Even - Odd = 2 - 2 = 0. Ignore letters. 
// The input will be an array of lowercase letters and numbers only.

// In some languages (Haskell, C++, and others), input will be an array of strings:

// solve ["0","1","2","3","a","b"] = 0

// P: an array of numbers and strings,
//    0 will be considered an even number,
//    letters will be lowercase only
// R: the difference between the count of even numbers and the count of odd numbers,
//    ignore letters
// E: solve([0,1,2,3]) = 0 because there are two even numbers and two odd numbers. Even - Odd = 2 - 2 = 0.  
//    solve([0,1,2,3,'a','b']) = 0. Again, Even - Odd = 2 - 2 = 0.
// P:

// create a function that takes in numbers and strings
function solve(arrNumStr) {
    let theEvens = arrNumStr.filter(num => num % 2 === 0);
    let theOdds = arrNumStr.filter(num => num % 2 === 1);
    return theEvens.length - theOdds.length;
}