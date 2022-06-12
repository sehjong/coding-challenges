// PREP

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// P: words only
// R: reversed string
// E: 'world'  =>  'dlrow'
//     'word'   =>  'drow'
// P:

// create a function that reverses the string passed into it
function reverseStr(str) {
    str.split('').reverse().join('');
}