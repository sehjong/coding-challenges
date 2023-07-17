// PREP

// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.

// P: a string containing uppercase letters, lowercase, numbers and special characters
// R: an array of integers that holds the count of uppercase letters, lowercase letters, numbers,
//    and special characters in the input string
// E: Solve("*'&ABCDabcde12345") = [4,5,5,3]
//    --the order is: uppercase letters, lowercase, numbers and special characters
// P:

// create a function expression
const solve = (str) => {
    let result = [0, 0, 0, 0];
    for(let i = 0; i < str.length; i += 1) {
        if(str[i].toLowerCase() > str[i]) {
            result[0] += 1;
        }else if(str[i].toUpperCase() < str[i]) {
            result[1] += 1;
        }else if(str[i] >= 0 && str[i] <= 9) {
            result[2] += 1;
        }else{
            result[3] += 1;
        }
    }
    return result;
}