// PREP

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// P: words
// R: two capital letters with a dot separating them
// E: Sam Harris => S.H

//    patrick feeney => P.F
// P:

// create a function that takes in a string
function abbrevName(name) {
    let upper = name.toUpperCase();
    let justName = upper.split('');
    `${justName[0][0]}.${justName[1][0]}`;
}