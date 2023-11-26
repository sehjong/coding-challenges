// PREP

// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

// P: an array of numbers in string format
// R: a string
// E: console.log(convert(['1', '2', '3']), 'zyx');
//    console.log(convert(['7', '22', '8', '7']), 'test');
//    console.log(convert(['27', '28', '29']), '!? ');
// P:

// create a function that takes in an array of numbers in string format
function convert(arrNums) {
    return arrNums.map(e =>
        {
            if (e === '27') {
                return '!';
            } else if (e === '28') {
                return '?';
            } else if (e === '29') {
                return ' ';
            } else {
                return String.fromCharCode(123 - e);
            }
        }).join('');
}