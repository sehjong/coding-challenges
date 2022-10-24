// PREP

// Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

// Ex.

// multiples(3, 5.0)
// should return

// [5.0, 10.0, 15.0]

// P: assume that m is a positive number and n an integer or floating-point number
// R: an array of the first m multiples of the real number n
// E: multiples(3, 5.0) should return [5.0, 10.0, 15.0]
//    multiples(1, 3.14) should return [3.14]
//    multiples(5, -1) should return [-1, -2, -3, -4, -5]
// P:

// create a function that takes in two numbers as parameters, m and n
function multiples(m, n) {
    let arr = [];
    for(let i = 1; i <= m; i ++) {
        arr.push(n * i);
    }
    return arr;
}