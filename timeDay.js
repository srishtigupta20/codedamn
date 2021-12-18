//Write a function which accepts two valid dates and returns the difference between them as number of days
const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
    // write your solution here
   let date1 = new Date(dateText1);
   let date2 = new Date(dateText2);
   const diffTime = Math.abs(date1 - date2);
   const diffDays = Math.ceil(diffTime/DAY_IN_MILLISECONDS);

    return diffDays;
}

console.log(`Days difference: ${getDaysBetweenDates('10/15/2020', '12/1/2020')}`)
