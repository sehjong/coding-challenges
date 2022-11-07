// PREP

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// P: an array of integers
// R: that single different number
// E: [1, 1, 2] ==> 2
//    [17, 17, 3, 17, 17, 17, 17] ==> 3
// P:

// create a function that takes in an array of numbers
function stray(nums) {
    for(let i in nums) {
        if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
            return nums[i]
        }
    }
}