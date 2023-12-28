// PREP

// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

// An example:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// The combine function should be a good citizen, so should not mutate the input objects.

// P: a variable number of parameters,
//    where each parameter is an object,
//    the properties of these objects are key-value pairs,
//    where the values are numeric
// R: a new object that is a combination of all input objects,
//    if the key is present in multiple objects,
//    their values are summed up in the returned object,
//    otherwise, if a key is present in only one object,
//    its value is directly transferred to the returned object,
//    and the function does not modify the input objects (non-mutating)
// E: const objA = { a: 10, b: 20, c: 30 }
//    const objB = { a: 3, c: 6, d: 3 }
//    combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// P:

// create a function that takes in a variable number of parameters,
// where each parameter is an object,
// the properties of these objects are key-value pairs,
// where the values are numeric
function combine() {
    
}