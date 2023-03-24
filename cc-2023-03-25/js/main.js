// PREP

// Find the last element of the given argument(s).

// Examples
// last([1, 2, 3, 4] ) // =>  4
// last("xyz")         // => "z"
// last(1, 2, 3, 4)    // =>  4
// In javascript and CoffeeScript a list will be an array, a string or the list of arguments.

// P: numbers and strings
// R: the last element of the given argument(s)
// E: last([1, 2, 3, 4] ) // =>  4
//    last("xyz")         // => "z"
//    last(1, 2, 3, 4)    // =>  4
// P:

// create a function that takes in numbers and strings
function last(list) {
    if(arguments.length - 1) {
        return arguments[arguments.length - 1];
    }
    if(Array.isArray(list)) {
        return list.pop();
    }else if(typeof list === 'string') {
        return list.charAt(list.length -1);
    }else{
        return list;
    }
}