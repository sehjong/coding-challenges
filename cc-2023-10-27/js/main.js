// PREP

// You have to create a method "compoundArray" which should take as input two int arrays of different length and return one int array with numbers of both arrays shuffled one by one.

// Input - {1,2,3,4,5,6} and {9,8,7,6} 
// Output - {1,9,2,8,3,7,4,6,5,6}

// P: two arrays of numbers
// R: an array of numbers from both arrays shuffled one by one
// E: Input - {1,2,3,4,5,6} and {9,8,7,6} 
//    Output - {1,9,2,8,3,7,4,6,5,6}
// P:

// create a function that takes in two arrays of numbers
function compoundArray(arr1, arr2) {
    const newArr = [];
    const maxLength = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < arr1.length) {
            newArr.push(arr1[i]);
        }
        if (i < arr2.length) {
            newArr.push(arr2[i]);
        }
    }

    return newArr;
}