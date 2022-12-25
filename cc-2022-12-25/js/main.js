// PREP

// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5 
// The most frequent number in the array is -1 and it occurs 5 times.

// P: an array of integers
// R: the count of the most frequent item of an array, for an empty array return 0
// E: input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
//    ouptut: 5 
//    The most frequent number in the array is -1 and it occurs 5 times.
// P:

// create a function that takes in an array of integers
function mostFrequentItemCount(collection) {
    let count = 0,
    frequentCount = 0;
    for(let i = 0; i < collection.length; i++) {
        for(let j = 0; j < collection.length; j++) {
            if(collection[i] == collection[j]) {
                count++;
            }
            if(frequentCount < count) {
                frequentCount = count;
            }
        }
        count = 0;
    }
}