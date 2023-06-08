// PREP

// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.

// P: a string of letters and whole numbers
// R: the sum of the integers inside a string
// E: "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635
// P:

// create a function that takes in a string of letters and whole numbers
function sumInt(str) {
    let num = [];
    let nums = '';
    for(let i = 0; i < str.length; i++) {
        if(!isNaN(Number(str[i]))) {
            nums += str[i];
            if(isNaN(Number(str[i + 1]))) {
                num.push(Number(nums));
                nums = '';
            }
        }
    }
    return num.reduce((acc, c) => acc + c);
}