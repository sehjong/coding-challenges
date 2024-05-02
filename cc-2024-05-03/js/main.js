// PREP

// Given 2 strings, your job is to find out if there is a substring that appears in both strings. You will return true if you find a substring that appears in both strings, or false if you do not. We only care about substrings that are longer than one letter long.

// #Examples:

// *Example 1*
// SubstringTest("Something","Fun"); //Returns false

// *Example 2*
// SubstringTest("Something","Home"); //Returns true
// In the above example, example 2 returns true because both of the inputs contain the substring "me". (soMEthing and hoME)
// In example 1, the method will return false because something and fun contain no common substrings. (We do not count the 'n' as a substring in this Kata because it is only 1 character long)

// #Rules: Lowercase and uppercase letters are the same. So 'A' == 'a'.
// We only count substrings that are > 1 in length.

// #Input: Two strings with both lower and upper cases. #Output: A boolean value determining if there is a common substring between the two inputs.

// P: two strings which may contain both lower and upper case letters
// R: any common substring that is longer than one character in both strings
// E: console.log(substringTest('Something', 'Fun'), false);
//    console.log(substringTest('Something', 'Home'), true);
//    console.log(substringTest('Something', ''), false);
// P:

// create a function that takes in two strings which may contain both lower and upper case letters
function substringTest(str1, str2) {
    // convert both strings to lowercase
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    // search for any common substring of length greater than one
    for (let i = 0; i < str2.length - 1; i++) {
        // extract a substring of length 2 from str2 starting at index i
        let sub = str2.substr(i, 2);
        // check if this substring is found in str1
        if (str1.indexOf(sub) > -1) {
            // common substring found
            return true;
        }
    }

    // no common substring found
    return false;
}