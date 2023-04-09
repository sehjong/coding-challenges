// PREP

// Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ....z = 26.

// You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list. For our purpose, position begins with 1.

// nameValue ["abc","abc abc"] should return [6,24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.

// "abc" has a value of 6, while "abc abc" has a value of 12. Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.

// Input will only contain lowercase characters and spaces.

// P: string(s), list of strings, only lowercase characters and spaces, but spaces are ignored in the return
// R: the values of the strings, assuming that each letter in the string has a value equal to its position in the alphabet,
//    multiplied by the position of that string in the list, position begins with 1
// E: nameValue ["abc","abc abc"] should return [6,24] because
//    "abc" means that: a = 1, b = 2, c = 3, so 1 + 2 + 3 = 6 and [ 6 * 1, 12 * 2 ]
//    because "abc" is in postion 1 in the list and "abc abc" is in postion 2 in the list
// P:

// create a function that takes in an array of strings
function wordValue(strArr) {
    strArr.map((x, i) => (i + 1) * [...x].reduce((a, c) => a + c.charCodeAt(0) % 32, 0));
}