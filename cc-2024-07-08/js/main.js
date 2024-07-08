// PREP

/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

// P: an array of numbers
// R: the number which is most frequent in the given input array,
//    if there is a tie for most frequent number, return the largest number among them
// E: [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
//    [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
//    [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
// P:

// create a function that takes in an array of numbers
function mostFrequentNum(arrNums) {
    // initialize an empty object to store frequency counts
    let obj = {};

    // iterate over each element in the input array
    arrNums.forEach(function(e) {
        // if the element is not already a key in the object, initialize it with a value of 0
        if (obj[e] === undefined)
            obj[e] = 0;
        // increment the count for the element
        obj[e]++;
    })

    // get the keys, which are the unique elements, from the frequency object
    let keys = Object.keys(obj), highest = 0, key;

    // iterate over the keys to find the element with the highest frequency
    keys.forEach(function(e) {
        // if the current element's frequency is higher than the highest recorded frequency,
        // or if it's equal and the current element is larger, update the highest count and corresponding key
        if (obj[e] >= highest) {
            highest = obj[e];
            key = e;
        }
    })

    // return the most frequent element as a number
    return parseInt(key);
}

console.log(mostFrequentNum([12, 10, 8, 12, 7, 6, 4, 10, 12]), 12);
console.log(mostFrequentNum([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]), 12);
console.log(mostFrequentNum([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]), 3);