// PREP

// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b

// P: two strings a and b
// R: a string constructed by placing the shorter input string before and after the reverse of the longer input string,
//    if both input strings have equal length, the first input string is considered the longer string
// E: console.log(shorterReverseLonger('sun', 'moon'), 'sunnoomsun');
//    console.log(shorterReverseLonger('moon', 'sun'), 'sunnoomsun');
//    console.log(shorterReverseLonger('hello', 'world'), 'worldollehworld');   
//    console.log(shorterReverseLonger('sky', ''), 'yks');
//    console.log(shorterReverseLonger('', 'earth'), 'htrae');
//    console.log(shorterReverseLonger('', ''), );
// P:

// create a function that takes in two strings a and b
function shorterReverseLonger(a, b) {

}