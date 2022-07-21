// PREP

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

// P: array of numbers, integers, if the function passes in an empty array or null/nil value then it should return an empty array
// R: sorted array of numbers, integers; otherwise, an empty array
// E: solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
//    solution(null); // should return []
// P:

// create a function that takes in an array of numbers
function sortArr(intArr) {
    return intArr === null ? [] : intArr.sort(function(a, b) {
        a - b;
    })
}