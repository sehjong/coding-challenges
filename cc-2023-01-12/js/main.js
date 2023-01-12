// PREP

// Create a function add(n)/Add(n) which returns a function that always adds n to any number

// Note for Java: the return type and methods have not been provided to make it a bit more challenging.

// var addOne = add(1);
// addOne(3); // 4

// var addThree = add(3);
// addThree(3); // 6

// P: integer
// R: a function that always adds n to any number
// E: var addOne = add(1);
//    addOne(3); // 4
//    var addThree = add(3);
//    addThree(3); // 6
// P:

// create a function that takes in an integer
function add(n) {
    return function (m) {
        return n + m;
    }
}

let addOne = add(1);
console.log(addOne(3), 4); // returns 4 4

let addThree = add(3);
console.log(addThree(3), 6); // returns 6 6