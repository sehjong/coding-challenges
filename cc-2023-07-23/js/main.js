// PREP

// Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

// For example:
// If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.

// P: an array of unique integers
// R: the minimum number of integers needed to make the contents of arr consecutive,
//    from the lowest number to the highest number
// E: [4, 8, 6] -> 2 because two numbers need to be added to the array (5 and 7),
//    to make it a consecutive array of numbers from 4 to 8
// P:

// create a function that takes in an array of unique integers
function consecutive(arr) {
    let lengthOfArr = arr.length;
    lengthOfArr ? Math.max(...arr) - Math.min(...arr) - lengthOfArr + 1 : 0;
}