// PREP

// In this Kata, you will be given a lower case string and your task will be to remove k characters from that string using the following rule:

// - first remove all letter 'a', followed by letter 'b', then 'c', etc...
// - remove the leftmost character first.
// For example: 
// solve('abracadabra', 1) = 'bracadabra' # remove the leftmost 'a'.
// solve('abracadabra', 2) = 'brcadabra'  # remove 2 'a' from the left.
// solve('abracadabra', 6) = 'rcdbr'      # remove 5 'a', remove 1 'b' 
// solve('abracadabra', 8) = 'rdr'
// solve('abracadabra',50) = ''
// More examples in the test cases. Good luck!

// P: string, lowercase
// R: the string according to the given rules:
//    - first remove all letter 'a', followed by letter 'b', then 'c', etc.,
//    - remove the leftmost character first
// E: solve('abracadabra', 1) = 'bracadabra' # remove the leftmost 'a'.
//    solve('abracadabra', 2) = 'brcadabra'  # remove 2 'a' from the left.
//    solve('abracadabra', 6) = 'rcdbr'      # remove 5 'a', remove 1 'b' 
//    solve('abracadabra', 8) = 'rdr'
//    solve('abracadabra',50) = ''
// P:

// create a function that takes in a string
function solve(str, k) {
    const abc = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < abc.length; i += 1) {
        while (k > 0 && str.includes(abc[i])) {
            str = str.replace(abc[i], '');
            k -= 1;
        }
    }
}