// PREP

// Given a long number, return all the possible sum of two digits of it.

// For example, 12345: all possible sum of two digits from that number are:

// [ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]
// Therefore the result must be:

// [ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]

// P: a long number
// R: an array of all the possible sums of two digits from the input number
// E: 12345: all possible sum of two digits from that number are:
//    [ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]
//    Therefore the result must be:
//    [ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]
// P:

// create a function that takes in a long number
function digits(num) {
    // initialize an empty array to store the results
    let result = [];

    // convert the number to a string, split it into digits, and iterate over each digit
    String(num).split('').forEach((e, i, a) => {
        // for the current digit, add it to each subsequent digit in the array
        for(let j = i + 1; j < a.length; j++)
            // convert both digits back to numbers, add them, and push the sum to the results array
            result.push(Number(e) + Number(a[j]));
    });

    // return the array of sums
    return result;
}

console.log(digits(12345), [3, 4, 5, 6, 5, 6, 7, 7, 8, 9]);