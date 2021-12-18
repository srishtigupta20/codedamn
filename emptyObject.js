//Write a function to check if an object is empty or not in javaScript?
const obj = { key: 1 };

function isEmpty(obj) {
    // write your solution here
 if(Object.keys(obj).length === 0){
     return true;
 }
    return false;
}

console.log(`is empty object: ${isEmpty(obj)}`)
