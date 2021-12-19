//Write a function to remove array element based on object property?
const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
];

const filterField = "money"

function removeArrayElement(filterField) {
    // write your solution here
var output = array.filter((obj) =>{
    return obj.field != filterField;
})
   return output;
}

console.log(`filtered array: ${removeArrayElement(filterField)}`)
