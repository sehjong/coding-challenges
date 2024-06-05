// PREP

// In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

// pairs([1,2,5,8,-4,-3,7,6,5]) = 3
// The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
// --the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
// --the second pair is (5,8) and are not consecutive
// --the third pair is (-4,-3), consecutive. Count = 2
// --the fourth pair is (7,6), also consecutive. Count = 3. 
// --the last digit has no pair, so we ignore.
// More examples in the test cases.

// Good luck!

// P: an array of integers
// R: an integer representing the count of pairs of consecutive numbers
// E: pairs([1,2,5,8,-4,-3,7,6,5]) = 3
// P:

// create a function that takes in an array of integers
function pairs(arrNums) {
    let count = 0;

    // iterate through the array with a step of 2 to check each pair
    for (let i = 0; i < arrNums.length - 1; i += 2) {
        // check if the absolute difference between the current element and the next element is 1
        if (Math.abs(arrNums[i] - arrNums[i + 1]) === 1) {
            // if true, increment the count
            count += 1;
        }
    }

    return count;
}

console.log(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5]), 3);
console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]), 2);
console.log(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]), 0);