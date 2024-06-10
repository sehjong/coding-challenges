// PREP

// Linked lists are data structures composed of nested or chained objects, each containing a single value and a reference to the next object.

// Here's an example of a list:

// {value: 1, next: {value: 2, next: {value: 3, next: null}}}
// Write a function listToArray (or list_to_array in Python) that converts a list to an array, like this:

// [1, 2, 3]
// Assume all inputs are valid lists with at least one value. For the purpose of simplicity, all values will be either numbers, strings, or Booleans.

// P: an object list representing a linked list,
//    each node has a number, string, or boolean value,
//    and a reference next to the next node,
//    or null if it's the last node
// R: an array containing the values from the linked list in the same order
// E: 
/*
let lists = [
    {value: 1, next: {value: 2, next: {value: 3, next: null}}},
    {value: 'string', next: null},
    {value: true, next: {value: false, next: {value: 'true', next: {value: 'false', next: null}}}}
]

console.log(listToArray(lists[0]), [1, 2, 3]);
console.log(listToArray(lists[1]), ['string']);
console.log(listToArray(lists[2]), [true, false, 'true', 'false']);
*/
// P:

//  create a function that takes in an object list representing a linked list,
//  each node has a number, string, or boolean value,
//  and a reference next to the next node,
//  or null if it's the last node
function listToArray(list) {
    // initialize an empty array to store the values
    const array = [];

    // iterate through each node in the linked list
    for (let node = list; node; node = node.next) {
        // add the value of the current node to the array
        array.push(node.value);
    }

    // return the array containing all the values from the linked list
    return array;
}