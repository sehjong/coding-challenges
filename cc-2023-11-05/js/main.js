// PREP

// You'll be passed an array of objects (list) - you must sort them in descending order based on the value of the specified property (sortBy).

// Example
// When sorted by "a", this:

// [
//   {"a": 1, "b": 3},
//   {"a": 3, "b": 2},
//   {"a": 2, "b": 40},
//   {"a": 4, "b": 12}
// ]
// should return:

// [
//   {"a": 4, "b": 12},
//   {"a": 3, "b": 2},
//   {"a": 2, "b": 40},
//   {"a": 1, "b": 3}
// ]
// The values will always be numbers, and the properties will always exist.

// P: two parameters, an array of objects (list), where each object has properties including the specified property to sort by,
//    and a string (sortBy), representing the property by which the array of objects should be sorted,
//    the values will always be numbers, and the properties will always exist
// R: an array of objects sorted in descending order based on the specified property
// E: When sorted by "a", this:

//    [
//      {"a": 1, "b": 3},
//      {"a": 3, "b": 2},
//      {"a": 2, "b": 40},
//      {"a": 4, "b": 12}
//    ]
//    should return:

//    [
//      {"a": 4, "b": 12},
//      {"a": 3, "b": 2},
//      {"a": 2, "b": 40},
//      {"a": 1, "b": 3}
//    ]
// P:

// create a function that takes in two parameters, an array of objects (list), and a string (sortBy)
function sortList(list, sortBy) {
    return list.sort((a, b) => b[sortBy] - a[sortBy]);
}

const inputList = [
    {'a': 1, 'b': 3},
    {'a': 3, 'b': 2},
    {'a': 2, 'b': 40},
    {'a': 4, 'b': 12}
];

const sortedList = sortList(inputList, 'a');

console.log(sortedList);

// or

console.log('Input:', inputList);
console.log('Output:', sortedList);

// or

console.log('Input:', inputList, '\nOutput:', sortedList);

// or

console.log('Input:', inputList, 'Output:', sortedList);

// or

console.log('Input:');
console.log(inputList);

console.log('\nOutput:');
console.log(sortedList);

// or

// console.log('Input:', inputList);
// const sortedList = sortList(inputList, 'a'); // cannot redeclare block-scoped variable 'sortedList'
// console.log('Sorted Output:', sortedList);