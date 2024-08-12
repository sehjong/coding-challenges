// PREP

/*
In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
-- We sort by highest frequency to lowest frequency.
-- If two elements have same frequency, we sort by increasing value.
More examples in test cases.

Good luck!
*/

// P: an array of numbers
// R: an array of numbers sorted by decreasing frequency,
//    and by increasing value when two elements have the same frequency
// E: solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
// P:

// create a function that takes in an array of numbers
function solve(arr) {
    // create a frequency map object to track occurrences of each number
    let frequencyMap = {};

    // iterate over each number in the array to populate the frequency map
    for (let num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    // sort the array
    return arr.slice().sort((a, b) => {
        // sort primarily by decreasing frequency
        let frequencyDifference = frequencyMap[b] - frequencyMap[a];
        if (frequencyDifference !== 0) {
            return frequencyDifference;
        }

        // if frequencies are equal, sort by increasing value
        return a - b;
    })
}