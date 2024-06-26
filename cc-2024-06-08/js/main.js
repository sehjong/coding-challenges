// PREP

// Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

// Example 1
// a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
// a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

// returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
// Example 2
// a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin']
// a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo']

// returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']
// Each element in the arrays will start with a unique letter so there will only be a single match for each element.

// P: n array of strings a1 where each string starts with a unique letter,
//    and another array of strings a2 where each string starts with a unique letter
// R: an array containing the elements of a2 sorted based on the index of the word in a1 that begins with the same letter
// E: Example 1
//    a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
//    a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']
//    returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
//    Example 2
//    a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin']
//    a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo']
//    returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']
// P:

// create a function expression that takes in an array of strings a1 where each string starts with a unique letter,
// and another array of strings a2 where each string starts with a unique letter,
// map elements in a1 to matching elements in a2 based on the first letter
const sortArr = (a1, a2) => a1.map(e1 => a2.find(e2 => e1[0] === e2[0]));

console.log(sortArr(['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'], ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']), ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']);
console.log(sortArr(['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'], ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo']), ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']);