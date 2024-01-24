// PREP

// There are some stones on Bob's table in a row, and each of them can be red, green or blue, indicated by the characters R, G, and B.

// Help Bob find the minimum number of stones he needs to remove from the table so that the stones in each pair of adjacent stones have different colors.

// Examples:

// "RGBRGBRGGB"   => 1
// "RGGRGBBRGRR"  => 3
// "RRRRGGGGBBBB" => 9

// P: a string representing a row of stones, where each stone is indicated by R, G, and B,
//    for the colors red, green, and blue
// R: a number that represents the minimum number of stones that need to be removed so that no two adjacent stones have the same color
// E: "RGBRGBRGGB"   => 1
//    "RGGRGBBRGRR"  => 3
//    "RRRRGGGGBBBB" => 9
// P:

// create a function that takes in a string representing a row of stones, where each stone is indicated by R, G, and B,
// for the colors red, green, and blue
function solve(stones) {
// initialize a counter for the number of times adjacent stones are similar
    let count = 0;
// loop through the stones starting from the second one
    for (let i = 1; i < stones.length; i++) {
// if the current stone is the same as the previous, increment count
        if (stones[i] === stones[i - 1]) {
            count++;
        }
    }
}