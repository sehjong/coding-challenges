// PREP

// Let's build a calculator that can calculate the average for an arbitrary number of arguments.

// The test expects you to provide a Calculator object with an average method:

// Calculator.average()
// The test also expects that when you pass no arguments, it returns 0. The arguments are expected to be integers.

// It expects Calculator.average(3,4,5) to return 4.

// P: the average method accepts an arbitrary number of arguments, all integers
// R: the average of the arguments as a number, if no arguments are passed, return 0
// E: Calculator.average(3, 4, 5) returns 4
// P: 

// create a Calculator object with an average method,
// the average method accepts an arbitrary number of arguments, all integers
let Calculator = {
    average: function() {
        // convert arguments to an array and calculate the average,
        // handle no arguments case by checking the length and returning 0 if no arguments,
        // use Array.prototype.slice to convert the arguments object into an array,
        // use the reduce method for arrays to calculate the sum of the array elements
        return arguments.length === 0 ? 0 : Array.prototype.slice.call(arguments).reduce(function(acc, c) {
            // sum the current element with the accumulator
            return acc + c;
        // divide the sum by the number of elements to find the average
        }, 0) / arguments.length;
    }
}

// the Calculator.average method with three arguments
console.log("Average of 3, 4, 5:", Calculator.average(3, 4, 5));

// the Calculator.average method with a larger set of numbers
console.log("Average of 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3:", Calculator.average(3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3));

// the Calculator.average method with an example of random generated numbers
let randomArgs = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
console.log("Average of random numbers:", Calculator.average(...randomArgs));

// the Calculator.average method with no arguments
console.log("Average with no arguments:", Calculator.average());

// refactored solution for clarity
const Calculator = {
    average: function(...args) {
        return args.length === 0 ? 0 : args.reduce((acc, c) => acc + c, 0) / args.length;
    }
}