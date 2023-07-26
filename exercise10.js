//sort integers
function sortInteger(num1,num2,num3) {
    if(num1 > num2 && num1 > num3) {
        if(num2 > num3) {
            return `${num2}, ${num3}, ${num1}`
        } else {
            return `${num3}, ${num2}, ${num1}`
        }
    } else if(num2 > num1 && num2 > num3) {
        if(num1 > num3) {
            return `${num3}, ${num1}, ${num2}`
        } else {
            return `${num1}, ${num3}, ${num2}`
        }
    } else if(num3 > num2 && num3 > num1) {
        if(num2 > num1) {
            return `${num1}, ${num2}, ${num3}`
        } else {
            return `${num2}, ${num1}, ${num3}`
        }
    } 
}
 
console.log(biggerInteger(30,40,10));
 console.log(biggerInteger(100,40,120));
 console.log(biggerInteger(100,130,60));
 console.log(biggerInteger(30,50,10));