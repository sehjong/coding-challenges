// PREP

// You will get an array of numbers.

// Every preceding number is smaller than the one following it.

// Some numbers will be missing, for instance:

// [-3,-2,1,5] //missing numbers are: -1,0,2,3,4
// Your task is to return an array of those missing numbers:

// [-1,0,2,3,4]

// P: an array of numbers,
//    where every preceding number is smaller than the one following it,
//    and some numbers will be missing
// R: an array containing all the missing numbers in the sequence,
//    sorted in ascending order
// E: [-3,-2,1,5] //missing numbers are: -1,0,2,3,4
//    Your task is to return an array of those missing numbers:
//    [-1,0,2,3,4]
// P:

// create a function that takes in an array of numbers,
// where every preceding number is smaller than the one following it,
// and some numbers will be missing
function findMissingNumbers(arrNums) {
    // initialize array for missing numbers
    let missingNums = [];

    // loop from first to last element in arrNums
    for (let i = arrNums[0]; i < arrNums[arrNums.length - 1]; i++) {
        // if the current number is missing in arrNums
        if (arrNums.indexOf(i) === -1) {
            // add it to missingNums
            missingNums.push(i);
        }
    }

    // return the array of missing numbers
    return missingNums;
}

console.log(findMissingNumbers([-3, -2, 1, 5]), [-1, 0, 2, 3, 4]);
console.log(findMissingNumbers([0, 1, 3, 5, 7]), [2, 4, 6]);
console.log(findMissingNumbers([-5, -3, -1, 2, 4]), [-4, -2, 0, 1, 3]);