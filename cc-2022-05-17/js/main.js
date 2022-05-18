// PREP

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// P: none of the arrays will be empty, elements in the array can be numbers or strings
// R: an array with every other element
// E: if given ['one', 2, 'three', 4, 'five'], will return ['one', 'three', 'five']
//    if given [6, 'seven', 8, 'nine', 10], will return [6, 8, 10]
// P:

// create a function that takes in an array
function everyOtherElement(arr) {
    let newArr = [];
// create a for loop to loop through the array
    for(i = 0; i < arr.length; i++) {
        if(i % 2 == 0){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

everyOtherElement(['one', 2, 'three', 4, 'five']); // ['one', 'three', 'five']
console.log(everyOtherElement([6, 'seven', 8, 'nine', 10])); // [6, 8, 10]