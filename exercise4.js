//change currentcy format to IDR
//create a number variable
// let num = 1000;

//using convert method
// let convertNum = num.toFixed(2);
// console.log(convertNum);

//using tolocalestring
function toIDR(num) {
    let convertNum = num.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
    })
    return convertNum
}

console.log(toIDR(10000));
console.log(toIDR(123214987));
console.log(toIDR(1540500));