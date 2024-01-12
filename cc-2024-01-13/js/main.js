// PREP

// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// P: a string of words
// R: an array of words sorted alphabetically based on the final character of each word,
//    if two words have the same last character, they appear in the order they were in the original string
// E: console.log(last('stars shine bright over the night sky'), ['shine', 'the', 'over', 'stars', 'bright', 'night', 'sky']);
//    console.log(last('hello, world! stay awhile.'), ['world!', 'hello,', 'awhile.', 'stay']);
//    console.log(last('Apple Banana Kiwi orange grape Lemon'), ['Banana', 'Apple', 'orange', 'grape', 'Kiwi', 'Lemon']);
//    console.log(last('find kind wind bind'), ['find', 'kind', 'wind', 'bind']);
// P:

// create a function that takes in a sring of words
function last(x) {
// split the string into an array of words using space as the delimiter,
// sort the order of words in the array using a comparison,
// that compares the last character of each word
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}