// PREP

// Task:
// Your job here is to write a function (keepOrder in JS/CoffeeScript, keep_order in Ruby/Crystal/Python, keeporder in Julia), which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array. The input array will always be sorted in ascending order. It may contain duplicates.

// Do not modify the input.

// Some examples:
// keepOrder([1, 2, 3, 4, 7], 5) //=> 4
//                       ^(index 4)
// keepOrder([1, 2, 3, 4, 7], 0) //=> 0
//           ^(index 0)
// keepOrder([1, 1, 2, 2, 2], 2) //=> 2
//                 ^(index 2)

// P: a sorted array and a value
// R: the lowest index where you could insert val to maintain the sorted-ness of the array,
//    the input array will always be sorted in ascending order and may contain duplicates
// E: keepOrder([1, 2, 3, 4, 7], 5) //=> 4, should return 4 because inserting 5 at index 4 keeps the array sorted
//    keepOrder([1, 2, 3, 4, 7], 0) //=> 0, should return 0 because inserting 0 at index 0 keeps the array sorted
//    keepOrder([1, 1, 2, 2, 2], 2) //=> 2, should return 2 because inserting 2 at index 2 keeps the array sorted
// P:

// create a function that takes in a sorted array and a value
function keepOrder(arr, val) {
    
}