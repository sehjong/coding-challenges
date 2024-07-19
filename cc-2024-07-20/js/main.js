// PREP

/*
Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

Examples
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"
*/

// P: a 4 digit string representing a year
// R: the century of the input year
// E: "1999" --> "20th"
//    "2011" --> "21st"
//    "2154" --> "22nd"
//    "2259" --> "23rd"
//    "1124" --> "12th"
//    "2000" --> "20th"
// P:

// create a function that takes in a 4 digit string representing a year
function whatCentury(year) {
    // calculate the century by dividing the year by 100 and rounding up
    let century = Math.ceil(year / 100);

    // determine the appropriate ordinal suffix for the century
    let suffix = (century % 10 === 1 && century !== 11) ? 'st' :
                 (century % 10 === 2 && century !== 12) ? 'nd' :
                 (century % 10 === 3 && century !== 13) ? 'rd' : 'th';

    // return the century concatenated with its ordinal suffix
    return century + suffix;
}