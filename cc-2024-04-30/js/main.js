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