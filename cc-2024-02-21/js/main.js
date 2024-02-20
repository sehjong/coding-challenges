// PREP

// You will be given an array of numbers.

// For each number in the array you will need to create an object.

// The object key will be the number, as a string. The value will be the corresponding character code, as a string.

// Return an array of the resulting objects.

// All inputs will be arrays of numbers. All character codes are valid lower case letters. The input array will not be empty.

// P: an array of numbers
// R: an array of objects, where the key is the number from the array converted to a string,
//    and the value is the corresponding character code of the number, also as a string
// E: console.log(numbersToCharObjects([118, 117, 120]), [{ '118': 'v' }, { '117': 'u' }, { '120': 'x' }]);
//    console.log(numbersToCharObjects([101, 121, 110, 113, 113, 103]), [{ '101': 'e' }, { '121': 'y' }, { '110': 'n' }, { '113': 'q' }, { '113': 'q' }, { '103': 'g' }]);
//    console.log(numbersToCharObjects([107, 99, 110, 107, 118, 106, 112, 102]), [{ '107': 'k' }, { '99': 'c' }, { '110': 'n' }, { '107': 'k' }, { '118': 'v' }, { '106': 'j' }, { '112': 'p' }, { '102': 'f' }]);
// P:

// create a function that takes in an array of numbers
function numbersToCharObjects(arrNums) {
    // map each number in the input array to an object where the key is the number as a string,
    // and the value is the corresponding ASCII character
    return arrNums.map(e => {
        return {
            [e]: String.fromCharCode(e)
        };
    });
}