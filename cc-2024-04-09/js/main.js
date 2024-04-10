// PREP

// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

// P: an array
// R: a new array with the elements in reverse order,
//    implemented manually since the dedicated built-in functionalities for reversing,
//    are intentionally deactivated for this challenge
// E: console.log(reverse([1, 2, 3, 4]), [4, 3, 2, 1]);
//    console.log(reverse(['a', 'b', 'c']), ['c', 'b', 'a']);
//    console.log(reverse([1, 'a', 2, 'b', 3, 'c']), ['c', 3, 'b', 2, 'a', 1]);
// P:

// create a function expression that takes in an array
const reverse = arr => {
    // initialize a new array to hold the reversed elements
    let newArr = [];

    // iterate over the input array from the last element to the first
    for (let i = arr.length - 1; i >= 0; i--) {
        // add the current element to the new array
        newArr.push(arr[i]);
    }

    // return the newly formed array with elements in reversed order
    return newArr;
}

console.log(reverse([1, 2, 3, 4]), [4, 3, 2, 1]);
console.log(reverse(['a', 'b', 'c']), ['c', 'b', 'a']);
console.log(reverse([1, 'a', 2, 'b', 3, 'c']), ['c', 3, 'b', 2, 'a', 1]);