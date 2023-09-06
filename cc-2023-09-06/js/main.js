// PREP

// You have to create a function named reverseIt.

// Write your function so that in the case a string or a number is passed in as the data , you will return the data in reverse order. If the data is any other type, return it as it is.

// Examples of inputs and subsequent outputs:

// "Hello" -> "olleH"

// "314159" -> "951413"

// [1,2,3] -> [1,2,3]

// P: any data type
// R: if the input data is a string or a number, return the reverse of that data,
//    if the input data is of any other data type, return it as it is
// E: // "Hello" -> "olleH"
      // "314159" -> "951413"
      // [1,2,3] -> [1,2,3]
// P:

// create a function that takes in a data type
function reverseIt(data) {
    if (typeof data === 'string') {
        return data.split('').reverse().join('');
    }
    if (typeof data === 'number') {
        const numToString = data.toString();
        const reversedNum = numToString.split('').reverse().join('');
        return parseInt(reversedNum);
    }
    return data;
}