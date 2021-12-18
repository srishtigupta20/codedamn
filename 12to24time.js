//Write a function which can convert the time input given in 12 hours format to 24 hours format
const time = '12:10AM';

function convertTo24HrsFormat(time) {
    // write your solution here
     var timeLower = time.toLowerCase();
     let [hours, mins] = timeLower.split(":");
     if(timeLower.endsWith("am")){
         hours = hours ==12?"0": hours;
     }else if(timeLower.endsWith("pm")){
         hours = hours ==12? hours: String(+hours +12);
     }
    return hours.padStart(2, 0) + ":" + mins.slice(0, -2).padStart(2, 0);
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)
