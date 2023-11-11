// PREP

// Given an array of strings, sort the array into order of weight from light to heavy.

// Weight units are grams(G), kilo-grams(KG) and tonnes(T).

// Arrays will always contain correct and positive values aswell as uppercase letters.

// P: an array of strings
// R: an array of strings sorted from lightest to heaviest
// E: console.log(arrange(['100G', '2KG', '500T', '1KG']), ['100G', '1KG', '2KG', '500T']); 
//    console.log(arrange(['10T', '500G', '1KG', '5KG']), ['500G', '1KG', '5KG', '10T']);
//    console.log(arrange(['200G', '300G', '150G', '100KG']), ['150G', '200G', '300G', '100KG']);
// P:

// create a function that takes in an array of strings
function arrange(arr) {
    const convWt = wt => {
        if (wt.slice(-2) === 'KG')
            return wt.slice(0, -2) * 1;
        else if (wt.slice(-1) === 'T')
            return wt.slice(0, -1) * 1000;
        else
            return wt.slice(0, -1) * 0.001;
    }
    return arr.sort((a, b) => convWt(a) - convWt(b));
}