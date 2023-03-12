// PREP

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// P: an array of natural numbers and another natural number as a limit value
// R: return true if all values in the array are below or equal to the limit value; otherwise, return false
// E: console.log(compareNums([1, 2, 3, 4, 5, 6, 7, 8, 9], 10), true);
//    console.log(compareNums([1,1, 1, 1, 1, 2], 1), false);
//    console.log(compareNums([80, 117, 115, 104, 45, 85, 112, 115], 120), true);
// P:

// create a function that takes in an array of natural numbers and another natural number as a limit value
function compareNums(arrNums, limitNum) {
    for(let i of arrNums) {
        if(i >= limitNum)
        return false;
    }
    return true;
}