// PREP

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// P: string, only lower case letters and/or spaces
// R: the number (count) of vowels in the given string
// E: 'hello' will return 2 because there are two vowels in string 'hello'
// P:

// create a function that takes in a string
function getCount(str) {
    return str.split('').filter(c => 'aeiouAEIOU'.includes(c)).length;
}