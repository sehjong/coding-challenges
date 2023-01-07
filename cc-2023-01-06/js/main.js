// PREP

// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

// If the total of both even and odd numbers are identical return: "Even and Odd are the same"

// P: a string of numbers
// R: confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits
// E: console.log(evenOrOdd('1234'), 'Even is greater than Odd');
//    console.log(evenOrOdd('123'), 'Odd is greater than Even');
//    console.log(evenOrOdd('112'), 'Even and Odd are the same');
// P:

// create a function that takes in a string of numbers
function evenOrOdd(strNums) {
    let odd = strNums.split('').filter(e => e % 2 != 0).reduce((a, b) => (+a) + (+b));
    let even = strNums.split('').filter(e => e % 2 == 0).reduce((a, b) => (+a) + (+b));
    if(even > odd) {
        return 'Even is greater than Odd';
    } else if(even < odd) {
        return 'Odd is greater than Even';
    } else {
        return 'Even and Odd are the same';
    }
}

console.log(evenOrOdd('1234'), 'Even is greater than Odd'); // returns Even is greater than Odd Even is greater than Odd
console.log(evenOrOdd('123'), 'Odd is greater than Even'); // returns Odd is greater than Even Odd is greater than Even
console.log(evenOrOdd('112'), 'Even and Odd are the same'); // returns Even and Odd are the same Even and Odd are the same