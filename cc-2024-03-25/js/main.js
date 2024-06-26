// PREP

// In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.

// Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.

// For example: 
// solve("abc") = True, because it contains a,b,c
// solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
// solve("dabc") = True, because it contains a, b, c, d
// solve("abbc") = False, because b does not occur once.
// solve("v") = True
// All inputs will be lowercase letters.

// More examples in test cases. Good luck!

// P: a string of lowercase letters
// R: true if the string contains consecutive letters as they appear in the English alphabet,
//    and each letter occurs only once,
//    otherwise, return false
// E: solve("abc") = True, because it contains a,b,c
//    solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
//    solve("dabc") = True, because it contains a, b, c, d
//    solve("abbc") = False, because b does not occur once.
//    solve("v") = True
// P:

// create a function that takes in a string of lowercase letters
function solve(str) {
    // convert the string into an array, sort it, join back into a string,
    // and check if it forms a consecutive sequence in the alphabet
    return 'abcdefghijklmnopqrstuvwxyz'.includes([...str].sort().join(''));
}

console.log(solve('abc'), true);
console.log(solve('abd'), false);
console.log(solve('dabc'), true);
console.log(solve('abbc'), false);
console.log(solve('v'), true);