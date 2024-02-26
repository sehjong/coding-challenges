// PREP

// Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
//   })
//   //returns 3

// P: an object that can contain various types of values, including nested objects
// R: an integer representing the total count of values within the object, including nested objects, that are of the string type
// E: strCount({
//    first: "1",
//    second: "2",
//    third: false,
//    fourth: ["anytime",2,3,4],
//    fifth:  null
//    })
//    //returns 3
// P:

// create a function that takes in an object that can contain various types of values, including nested objects
function strCount(obj) {
    // initialize a counter for string values
    let count = 0;

    // iterate over each key in the object
    for (key in obj) {
        // check if the current value is a string,
        // if it's a string, increment the count
        if (typeof obj[key] == 'string') count++;
        // check if the current value is an object,
        // if it's an object, recursively call strCount on it and add the result to the count
        if (typeof obj[key] == 'object') count += strCount(obj[key]);
    }

    // return the total count of strings found in the object
    return count;
}