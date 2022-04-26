// PREP

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// P: integer
// R: which quarter of the year a month given as an integer belongs as an integer
// E: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter
// P:

// create a function that takes in a number
function quarterOf(month) {
    Math.ceil(month/3);
}