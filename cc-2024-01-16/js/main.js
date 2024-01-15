// PREP

// Your job is to implement a function which returns the last D digits of an integer N as a list.

// Special cases:
// If D > (the number of digits of N), return all the digits.
// If D <= 0, return an empty list.
// Examples:
// N = 1
// D = 1
// result = [1]

// N = 1234
// D = 2
// result = [3, 4]

// N = 637547
// D = 6
// result = [6, 3, 7, 5, 4, 7]

// P: an integer n and an integer d representing the number of last digits to return
// R: an array of integers,
//    the array contains the last d digits of n
//    if d is greater than the number of digits in n, return all the digits of n,
//    if d is less than or equal to 0, return an empty array
// E: N = 1
//    D = 1
//    result = [1]

//    N = 1234
//    D = 2
//    result = [3, 4]

//    N = 637547
//    D = 6
//    result = [6, 3, 7, 5, 4, 7]
// P: 

// create a function that takes in an integer n and an integer d representing the number of last digits to return
function lastDigit(n, d) {
// convert the integer n to a string, then split it into an array of its individual characters (digits),
// map each character (digit) back to a number
    const nums = String(n).split('').map(Number);
// determine the length of the nums array
    const totalDigits = nums.length;
// initialize an index counter to keep track of the current position in the array
    let currentIndex = 0;
}