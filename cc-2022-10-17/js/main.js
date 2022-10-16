// PREP

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

// P: natural numbers
// R: the sum of the numbers in the nth row of this triangle (starting at index 1)
// E: 1 -->  1
//    2 --> 3 + 5 = 8
// P:

// create a function that takes in a number
function rowSumOddNumbers(num) {
    let oddNum = [];
    for(let i = (num**2) -num + 1; i <= ((num**2) +num - 1); i += 2) {
        oddNum.push[i];
    };
    const reducer = (a, b) => {return a + b};
    return oddNum.reduce(reducer);
}