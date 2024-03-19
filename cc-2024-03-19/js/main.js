// PREP

// You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.

// The array is unsorted.

// An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] would not be valid as it is missing 3.

// You should return the duplicate value as a single integer.

// P: an unsorted array of n + 1 integers 1 through n and there is one duplicate
// R: the duplicate value as a single integer
// E: console.log(findDuplicateInteger([3, 2, 5, 1, 3, 4]), 3);
// P:

// create a function that takes in an unsorted array of n + 1 integers 1 through n and there is one duplicate
function findDuplicateInteger(arrNums) {
    // sort the array in ascending order
    arrNums.sort();

    // loop through the array
    for(let i = 0; i < arrNums.length; i++) {
        // check if the current element is equal to the next element
        if(arrNums[i] == arrNums[i + 1]) {
            // if a duplicate is found, return the duplicate value
            return arrNums[i];
        }
    }

    // if no duplicate is found by the end of the loop, implicitly return undefined
}

console.log(findDuplicateInteger([3, 2, 5, 1, 3, 4]), 3);