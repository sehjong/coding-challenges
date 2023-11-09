// PREP

// Sum and Length
// In this kata you must return a string value, where the first part is the sum of positive numbers and the second part is the number of negative numbers.
// Knowing that the first '0' is negative, the second is positive, the third is negative, and so on...


// For example :
// sumLength([-1,2,3,4,0,1,0,-2,0,-3])
// return '10 5' (10 = 1 + 2 + 3 + 4 and 5 = 3 + 2 => 3 negatives numbers + second 0 as negative)

// P: an array of integers
// R: a string value, where the first part is the sum of positive numbers and the second part is the number of negative numbers
// E: sumLength([-1,2,3,4,0,1,0,-2,0,-3])
//    return '10 5' (10 = 1 + 2 + 3 + 4 and 5 = 3 + 2 => 3 negatives numbers + second 0 as negative)
// P:

// create a function that takes in an array of integers
function sumLength(arr) {
    const result = [arr.reduce((a, b) => a + ((b > 0) * b), 0)];
    result.push(arr.reduce((a, b) => a + (b < 0), 0));
    result[1] += Math.ceil(arr.filter(num => num === 0).length / 2);
    return result.join(' ');
}