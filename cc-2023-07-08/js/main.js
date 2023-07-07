// PREP

// Tea for two!

// Given a string or number write a function tea42 that takes as input a string or number and returns a string where every '2' charcter or digit has been replaced with a t.

// tea42('coffee') //should return 'coffee'
// tea42('tea') //should return 'tea'
// tea42('2ea') //should return 'tea'
// tea42(9022) //should return '90tt'
// tea42(5676765) //should return '5676765'

// P: a string of letters, a string of letters and numbers, or numbers
// R: a string where every '2' charcter or digit has been replaced with a t
// E: tea42('coffee') //should return 'coffee'
//    tea42('tea') //should return 'tea'
//    tea42('2ea') //should return 'tea'
//    tea42(9022) //should return '90tt'
//    tea42(5676765) //should return '5676765'
// P:

// create a function that takes in a string of letters, a string of letters and numbers, or numbers
function tea42(input) {
    input.toString().replaceAll('2', 't');
}