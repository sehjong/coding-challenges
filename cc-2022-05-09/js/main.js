// PREP

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// P: whole numbers
//    Input constraints:
//    0 <= h <= 23
//    0 <= m <= 59
//    0 <= s <= 59
// R: the time since midnight in milliseconds
// E: h = 0
//    m = 1
//    s = 1
//    result = 61000
// P:

// create a function that takes in h hours, m minutes, s seconds
function past(h, m, s) {
    return ((h * 3600000) + (m * 60000) + (s * 1000));
}