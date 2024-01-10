// PREP

// You must create a function, spread, that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.

// eg:

// spread(someFunction, [1, true, "Foo", "bar"] ) 
// // is the same as...
// someFunction(1, true, "Foo", "bar")

// P: the function spread takes in two parameters:
//    a function that will be called with a list of arguments,
//    and an array containing those arguments to be applied to that function
// R: the result of calling the function with the arguments provided
// E: spread(someFunction, [1, true, "Foo", "bar"] ) 
//    is the same as...
//    someFunction(1, true, "Foo", "bar")
// P:

// create or define a function with two parameters,
// a function that will be called with a list of arguments,
// and an array containing those arguments to be applied to that function
function spread(func, args) {
// use the spread operator/syntax "..." to expand the array's elements into individual arguments
    return func(...args);
}

// Unlike statically typed languages like C or Java, JavaScript is a dynamically typed language,
// and can infer variable types from assigned values, which may change during runtime.
// This type coercion in JavaScript may not always produce the desired or expected result.

// this evaluates to '2Foobar':
// in JavaScript, the boolean 'true' is coerced to 1 when involved in arithmetic operations,
// therefore, 1 (number) + true (coerced to 1) results in 2, 
// the remaining string arguments "Foo" and "bar" are concatenated, resulting in '2Foobar'
function someFunction(a, b, c, d) {
    return a + b + c + d;
}

// this evaluates to '1trueFoobar':
// this version sanitizes the inputs by explicitly converting all arguments to strings,
// and ensures that the arguments are concatenated as strings without arithmetic coercion,
// as a result, it evaluates to '1trueFoobar'
function someFunction(a, b, c, d) {
    return String(a) + String(b) + c + d;
}

function add(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

console.log(spread(someFunction, [1, true, 'Foo', 'bar']), '2Foobar');
console.log(spread(someFunction, [1, true, 'Foo', 'bar']), '1trueFoobar');
console.log(spread(add, [1,2]), 3);
console.log(spread(minus, [9,2]), 7);