// PREP

// Complete the function so that it returns the number of seconds that have elapsed between the start and end times given.

// Tips:
// The start/end times are given as Date (JS/CoffeeScript), DateTime (C#), Time (Nim), datetime(Python) and Time (Ruby) instances.
// The start time will always be before the end time.

// P: integers, the start time will always be before the end time
// R: the number of seconds that have elapsed between the start and end times given
// E: const start = new Date(2013, 1, 1, 0, 0, 1);
//    const end = new Date(2013, 1, 1, 0, 1, 20);
//    console.log(elapsedSeconds(start, end), 79);
// P:

// create a function that takes in start and end times
function elapsedSeconds(startDate, endDate) {
    return (endDate - startDate) / 1000;
}