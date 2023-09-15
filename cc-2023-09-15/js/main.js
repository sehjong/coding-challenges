// PREP

// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

// example

// capitalizeFirstLetter(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
// capitalizeFirstLetter(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

// P: an array of names
// R: an array of each name with its first letter capitalized
// E: capitalizeFirstLetter(['jo', 'nelson', 'jurie']);     // returns ['Jo', 'Nelson', 'Jurie']
//    capitalizeFirstLetter(['KARLY', 'DANIEL', 'KELSEY']); // returns ['Karly', 'Daniel', 'Kelsey']
// P:

// create a function that takes in an array of names
function capitalizeFirstLetter(names) {
    return names.map(name => {
        const lowerCaseName = name.toLowerCase();
        return lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.substring(1);
    });
}