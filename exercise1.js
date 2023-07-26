//create a display of multiplication of an integer
//create initial variable of number

let n = 10;
let i = 1;
let end = 10;

if (n > 10) {
    console.log(`Multiplication should not above 10`);
}
while(i <= end) {
    let result = n * i
    console.log(`${n} x ${i} = ${result}`);
    i++
}