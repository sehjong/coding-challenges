// PREP

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// P: whole numbers and strings
// R: a new array with the strings filtered out
// E: filter_list([1,2,'a','b']) == [1,2]
//    filter_list([1,'a','b',0,15]) == [1,0,15]
//    filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
// P:

// create a function that takes in whole numbers and strings
function filter_list(listArr) {
    let newArr = [];
    for(let i = 0; i < listArr.length; i++) {
        if(typeof listArr[i] !== 'string') {
            newArr.push(listArr[i]);
        }
    }
    return newArr;
}