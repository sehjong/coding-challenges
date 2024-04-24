// PREP

// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.

// P: an array of numbers, which may include duplicate values
// R: the sum of all unique numbers in the array,
//    a number is considered unique if it appears exactly once in the array
// E: [3, 4, 3, 6] -> 10
// P:

// create a function that takes in an array of numbers, which may include duplicate values
function sumUniqueNumbers(arrNums) {
    // initialize an empty array to store unique numbers (elements)
    let uniqueArrNums = [];
    // initialize a variable to keep track of the sum of unique numbers
    let totalSum = 0;

    // iterate over each number in the input array
    arrNums.forEach(currentNum => {
        // check if the current number is unique in the array by comparing the first and last indices
        if (arrNums.indexOf(currentNum) === arrNums.lastIndexOf(currentNum)) {
            // if it's unique, add it to the uniqueArrNums array
            uniqueArrNums.push(currentNum);
            // add the unique number to the sum
            totalSum += currentNum;
        }
    })

    // return the total sum of unique numbers
    return totalSum;
}

console.log(sumUniqueNumbers([3, 4, 3, 6]), 10);
console.log(sumUniqueNumbers([]), 0);
console.log(sumUniqueNumbers([7, 2, 0, 3, 5, 7, 8, 3, 2, 10, 9, 5]), 27);