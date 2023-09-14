// PREP

// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

// example

// capitalizeFirstLetter(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
// capitalizeFirstLetter(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

// P: an array of names
// R: an array of each name with its first letter capitalized
// E: capitalizeFirstLetter(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
//    capitalizeFirstLetter(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
// P:

// create a function that takes in an array of names
function capitalizeFirstLetter(names) {
    const capitalizedNames = [];

    for (let i = 0; i < names.length; i++) {
        const capitalized = names[i].toLowerCase().charAt(0).toUpperCase() + names[i].substring(1);
        capitalizedNames.push(capitalized);
    }
}