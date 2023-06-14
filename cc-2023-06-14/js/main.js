// PREP

// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

// For example:

// solve([15,11,10,7,12]) = [15,7,12,10,11]
// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

// P: an array of numbers
// R: an array of those numbers rearranged so that the first max value is followed by the first min value,
//    followed by the second max value and min value, and so on
// E: solve([15,11,10,7,12]) = [15,7,12,10,11]
//    the first max is 15 and the first min is 7,
//    the second max is 12 and the second min is 10, etc.
// P:

// create a function that takes in an array of numbers
function maxMin(arrNums) {
    let minMax = [];
    arrNums.sort((a, b) => a - b);
    for(let i = 0, j = arrNums.length - 1; i <= j; i++, j--) {
        if(i != j) minMax.push(arrNums[j]), minMax.push(arrNums[i]);
        else minMax.push(arrNums[i]);
    }
    return minMax;
}