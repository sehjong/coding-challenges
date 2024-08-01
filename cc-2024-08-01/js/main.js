// PREP

/*
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/

// P: a number representing the size of a 2D matrix,
//    that is, the number of rows and columns of a 2D array of n * n
// R: a matrix where each subarray represents a row in the multiplication table
// E: 
/*
if the number is 3,

1 2 3
2 4 6
3 6 9

->

[[1,2,3],[2,4,6],[3,6,9]]
*/
// P:

// create a function expression that takes in a number representing the size of a 2D matrix,
// that is, the number of rows and columns of a 2D array of n * n
let multiplicationTable = function(size) {
    // initialize an empty array to store the result
    let result = [];

    // loop from 0 to size - 1 to create each row
    for (let i = 0; i < size; i++) {
        // initialize an empty array for the current row
        result[i] = [];
        // loop from 0 to size - 1 to create each element in the row
        for (let j = 0; j < size; j++) {
            // calculate the value and assign it to the current element
            result[i][j] = (i + 1) * (j + 1);
        }
    }

    // return the dynamically created 2D matrix with the multiplication results
    return result;
}

console.log(multiplicationTable(3), [[1, 2, 3], [2, 4, 6], [3, 6, 9]]);