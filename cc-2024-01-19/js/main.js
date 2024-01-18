// PREP

// The Stanton measure of an array is computed as follows: count the number of occurences for value 1 in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.

// Write a function which takes an integer array and returns its Stanton measure.

// Examples
// The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.

// The Stanton measure of [1, 4, 1, 2, 11, 2, 3, 1] is 1, because 1 occurs 3 times in the array and 3 occurs 1 time.

// P: an array of integers
// R: an integer, which is the number of times the count of 1s in the array appears in the array,
//    let this count be n and return the number of times that n appears in the array
// E: The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.
//    The Stanton measure of [1, 4, 1, 2, 11, 2, 3, 1] is 1, because 1 occurs 3 times in the array and 3 occurs 1 time.
// P:

// create a function that takes in an array of integers,
// "Stanton Measure" is not a built-in standard or concept in JavaScript,
// it is specific to this coding challenge,
// in the realm of programming and computer science, there are many standard algorithms and measures,
// but the "Stanton Measure" is not one of them,
// it's an example of how coding challenges often introduce unique problems or concepts to test problem-solving skills,
// algorithmic thinking, and coding ability
function stantonMeasure(arrNums) {
// count occurrences of a number in the array
    const count = n => arrNums.filter(e => e === n).length;
// count(1): count how many times the number of 1s appears in the array,
// count(count(1)): then calculate how many times n itself appears in the array
    return count(count(1));
}