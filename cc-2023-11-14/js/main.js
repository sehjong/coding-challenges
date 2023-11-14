// PREP

// Find and return second largest unique number in given Array.

// Array may contain values of any data type. Ignore everything except numbers and strings, which may be converted to numbers.

// If passed value is not an Array or if there is no second largest item in given Array (e.g. [1, 1, 1]) should return undefined.

// Examples
// secondLargest([1, -2, 3]) = 1;
// secondLargest([5, 5, 4]) = 4;
// secondLargest([2, '3', 4]) = 3;
// Should return
// // 1. Passed value not an Array:
// secondLargest("1 2 3") = undefined;

// // 2. There is no second largest:
// secondLargest([2, 2, 2]) = undefined;

// // 3. Ignore everything except:
// //   * numbers
// //   * not-NaN strings:
// secondLargest(['-1', 2, null, false]) = -1;
// Input range
// Numbers are safe Integers.
// Not-NaN strings represent safe Integers.

// P: an array of any data type
// R: second largest unique number in given Array
// E: console.log(secondLargest([1, -2, 3]), 1);
//    console.log(secondLargest([5, 5, 4]), 4);
//    console.log(secondLargest([2, '3', 4]), 3);
//    console.log(secondLargest('1 2 3'), undefined);
//    console.log(secondLargest([2, 2, 2]), undefined);
//    console.log(secondLargest(['-1', 2, null, false]), -1);
// P:

// create a function that takes in an array of any data type
function secondLargest(arr) {
    if (!Array.isArray(arr)) {
        return undefined;
    }

    const numbers = arr.filter(item => typeof item === 'number' || !isNaN(Number(item)));

    const uniqueNumbers = [...new Set(numbers)];

    const sortedNumbers = uniqueNumbers.sort((a, b) => b - a);

    if (sortedNumbers.length < 2) {
        return undefined;
    }

    return sortedNumbers[1];
}
