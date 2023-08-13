// PREP

// You are given two strings. In a single move, you can choose any of them, and delete the first (i.e. leftmost) character.

// For Example:

// By applying a move to the string "where", the result is the string "here".
// By applying a move to the string "a", the result is an empty string "".
// Implement a function that calculates the minimum number of moves that should be performed to make the given strings equal.

// Notes
// Both strings consist of lowercase latin letters.
// If the string is already empty, you cannot perform any more delete operations.

// P: two strings
// R: the minimum number of moves that should be performed to make the given strings equal
// E: By applying a move to the string "where", the result is the string "here".
//    By applying a move to the string "a", the result is an empty string "".
//    console.log(minMoves("test", "west"), 2);
// P:

// create a function that takes in two strings
function minMoves(str1, str2) {
    let i = str1.length, j = str2.length;
    while (i >= 0 && j >= 0 && str1[i] == str2[j])
        i--, j--;
    return (i + 1) + (j + 1);
}