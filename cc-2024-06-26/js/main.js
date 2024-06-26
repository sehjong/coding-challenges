// PREP

/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

// P: a string
// R: a number representing the count of distinct case-insensitive characters,
//    and numeric digits that occur more than once in the input string
// E: "abcde" -> 0 # no characters repeats more than once
//    "aabbcde" -> 2 # 'a' and 'b'
//    "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
//    "indivisibility" -> 1 # 'i' occurs six times
//    "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
//    "aA11" -> 2 # 'a' and '1'
//    "ABBA" -> 2 # 'A' and 'B' each occur twice
// P:

// create a function that takes in a string
function duplicateCount(str) {
    // convert the input string to lowercase to ensure case insensitivity,
    // split the string into an array of characters,
    // filter the array to keep only characters that occur more than once
    return str.toLowerCase().split('').filter(function(e, i, a) {
        // check if the current character's first occurrence index is different from its current index,
        // this ensures that only characters that have been seen before are considered,
        // check if the current character's last occurrence index is the same as its current index,
        // this ensures that each character is counted only once, even if it occurs multiple times
        return a.indexOf(e) !== i && a.lastIndexOf(e) === i;
    // get the length of the filtered array, which is the count of characters that occur more than once    
    }).length;
}

console.log(duplicateCount('abcde'), 0);
console.log(duplicateCount('aabbcde'), 2);
console.log(duplicateCount('aabBcde'), 2);
console.log(duplicateCount('indivisibility'), 1);
console.log(duplicateCount('Indivisibilities'), 2);
console.log(duplicateCount('aA11'), 2);
console.log(duplicateCount('ABBA'), 2);