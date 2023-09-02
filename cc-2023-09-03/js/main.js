// PREP

// Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary)

// Matrix = array of n length whose elements are n length arrays of integers.

// 3x3 example:

// diagonals( [
//   [ 1, 2, 3 ],
//   [ 4, 5, 6 ],
//   [ 7, 8, 9 ]
// ] ); 

// returns -> 30 // 1 + 5 + 9 + 3 + 5 + 7

// P: a square matrix, which is represented as an array of arrays,
//    each element in the matrix is an integer
// R: the sum of both diagonals in the matrix
// E: diagonals( [
//   [ 1, 2, 3 ],
//   [ 4, 5, 6 ],
//   [ 7, 8, 9 ]
// ] ); 
// returns -> 30 // 1 + 5 + 9 + 3 + 5 + 7
// P:

// create a function that receives a (square) matrix,
// represented as an array of arrays,
// where each element in the matrix is an integer
function sum(matrix) {
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][matrix.length - 1 - i];
    }
}