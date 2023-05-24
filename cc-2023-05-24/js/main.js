// PREP

// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

// P: an array with exactly 5 strings "a", "b" or "c"
// R: check if the array contains three and two of the same values
// E: ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
//    ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
//    ["a", "a", "a", "a", "a"] ==> false // 5x "a"
// P:

// create a function that takes in an array of 5 strings comprising of "a", "b" or "c"
function checkThreeAndTwo(arr) {
    let item1 = 0, item2 = 0, item3 = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 'a') {
            item1++;
        }else if(arr[i] === 'b') {
            item2++;
        }else if(arr[i] === 'c') {
            item3++;
        }
    }
    return (item1 == 2 || item2 == 2 || item3 == 2) && (item1 == 3 || item2 == 3 || item3 == 3);
}