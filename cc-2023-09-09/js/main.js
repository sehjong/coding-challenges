// PREP

// Create a function that takes a string and returns that string with the first half lowercased and the last half uppercased.

// eg: foobar == fooBAR

// If it is an odd number then 'round' it up to find which letters to uppercase. See example below.

// sillycase("brian")  
// //         --^-- midpoint  
// //         bri    first half (lower-cased)  
// //            AN second half (upper-cased)

// P: a string
// R: that string with the first half lowercased and the last half uppercased,
//    if it is an odd number then 'round' it up to find which letters to uppercase
// E: foobar == fooBAR
//    sillycase("brian")  
//               --^-- midpoint  
//               bri    first half (lower-cased)  
//                  AN second half (upper-cased)
// P:

// create a function that takes in a string
function sillyCase(str) {
    const midpoint = Math.ceil(str.length / 2);
    const firstHalf = str.slice(0, midpoint).toLowerCase();
    const secondHalf = str.slice(midpoint).toUpperCase();
    return firstHalf + secondHalf;
}