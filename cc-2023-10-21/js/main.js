// PREP

// Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

// The method takes two parameters, the query string and the array of strings to search, and returns an array.

// If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)

// Examples
// If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].

// P: two parameters, the query string and the array of strings to search
// R: an array of the found strings
// E: If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"]
// P:

// create a function that takes in two parameters, a query string and an array of strings to search
function wordSearch(query, seq) {
    query = query.toLowerCase();
    let res = seq.filter(function(item) {
        return item.toLowerCase().indexOf(query) !== -1;
    })
}