// PREP

// In this Kata, you will be given two positive integers a and b and your task will be to apply the following operations:

// i) If a = 0 or b = 0, return [a,b]. Otherwise, go to step (ii);
// ii) If a ≥ 2*b, set a = a - 2*b, and repeat step (i). Otherwise, go to step (iii);
// iii) If b ≥ 2*a, set b = b - 2*a, and repeat step (i). Otherwise, return [a,b].
// a and b will both be lower than 10E8.

// More examples in tests cases. Good luck!

// P: a positive integer a and a positive integer b
// R: an array of two integers, [a, b], after applying the specified operations,
//    until neither operation can further modify the values
// E: i) If a = 0 or b = 0, return [a,b]. Otherwise, go to step (ii);
//    ii) If a ≥ 2*b, set a = a - 2*b, and repeat step (i). Otherwise, go to step (iii);
//    iii) If b ≥ 2*a, set b = b - 2*a, and repeat step (i). Otherwise, return [a,b].
//    a and b will both be lower than 10E8.
// P:

// create a function that takes in a positive integer a and a positive integer b
function solve(a, b) {
    // base case: if either a or b is 0, return the current values of a and b
    if (!a || !b) return [a, b];

    // if a is at least twice b, reduce a by twice b and recurse
    if (a >= 2 * b) return solve(a - 2 * b, b);

    // if b is at least twice a, reduce b by twice a and recurse
    if (b >= 2 * a) return solve(a, b - 2 * a);

    // if neither condition applies, return the current values of a and b
    return [a, b];
}