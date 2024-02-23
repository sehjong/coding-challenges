// PREP

// I have the par value for each hole on a golf course and my stroke score on each hole. I have them stored as strings, because I wrote them down on a sheet of paper. Right now, I'm using those strings to calculate my golf score by hand: take the difference between my actual score and the par of the hole, and add up the results for all 18 holes.

// For example:

// If I took 7 shots on a hole where the par was 5, my score would be: 7 - 5 = 2
// If I got a hole-in-one where the par was 4, my score would be: 1 - 4 = -3.
// Doing all this math by hand is really hard! Can you help make my life easier?

// Task Overview
// Complete the function which accepts two strings and calculates the golf score of a game. Both strings will be of length 18, and each character in the string will be a number between 1 and 9 inclusive.

// P: a string of length 18, parList, where each character represents the par value of each hole on a golf course,
//    with characters being numbers between 1 and 9 inclusive,
//    and a string of the same length as parList, scoreList, where each character represents the actual strokes taken on each hole,
//    with characters being numbers between 1 and 9 inclusive
// R: an integer which represents the total difference between the player's strokes and the par values for all 18 holes,
//    it could be positive, negative, or zero, indicating how many strokes over, under, or exactly at par the player was, respectively
// E: console.log(golfScoreCalculator('5', '7'), 2);
//    console.log(golfScoreCalculator('4', '1'), -3);
//    console.log(golfScoreCalculator('123', '321'), 0);
// P:

// create a function expression that takes in a string of length 18, parList, where each character represents the par value of each hole on a golf course,
//    with characters being numbers between 1 and 9 inclusive,
//    and a string of the same length as parList, scoreList, where each character represents the actual strokes taken on each hole,
//    with characters being numbers between 1 and 9 inclusive
const golfScoreCalculator = (parList, scoreList) =>
    // use the reduce method to iterate over each character in scoreList, which represents scores,
    // for each score, convert it and the corresponding par to numbers, subtract them,
    // add the difference to the accumulating result, and return the new result,
    // initialize the accumulator (result) to 0 at the start of the reduction
    [...scoreList].reduce((result, score, index) => result += score - parList[index], 0);