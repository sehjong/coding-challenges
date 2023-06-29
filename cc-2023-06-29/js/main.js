// PREP

// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

// P: a string of letters and numbers
// R: an array as a (list of tuples) in order of appearance
// E: orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
// P:

// create a function expression that returns an array as a (list of tuples) in order of appearance,
// from a string of letters and numbers
const orderedCount = str => {
    return Array.from(
        str.split('').reduce((acc, c) =>
            acc.set(c, acc.has(c) ? acc.get(c) + 1 : 1),
                new Map()
        )
    );
}