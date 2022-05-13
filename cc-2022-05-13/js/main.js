// PREP

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// P: only numbers
// R: console
// E: evenOrOddNum(20); evenOrOddNum(25); evenOrOddNum(30); evenOrOddNum(35);
// P:

// create a function that takes in a number
function evenOrOddNum(num) {
// return "Even" for even numbers and "Odd" for odd numbers 
    return num % 2 ? "Odd" : "Even";
}

evenOrOddNum(25);
console.log(evenOrOddNum(25));