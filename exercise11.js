// check data type
function sortDataType(data) {
    if(typeof data === "string") {
        return 1
    } else if(typeof data === "number") {
        return 2
    } else {
        return 3
    } 
}
 
console.log(sortDataType(30));
console.log(sortDataType("100,40,120"));
console.log(sortDataType(true));
console.log(sortDataType([]));

