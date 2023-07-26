//biggest of two integers

function biggerInteger(num1 , num2) {
    if (num1 > num2) {
        return num1
    } else if (num2 > num1) {
        return num2
    } else {
        return `it is equal`;
    }
}

console.log(biggerInteger(30,40));
console.log(biggerInteger(100,40));
console.log(biggerInteger(100,100));
console.log(biggerInteger(30,50));