//create program to remove certain words from a string
//create string variable
let string = 'Hello World';
let remove = 'ello';
let flag = true;
let start = 0;
let end = remove.length - 1;
let temp = '';

for (let i = 0; i < string.length; i++) {
    if(string[i] == remove[start]) {
        flag = false;
        start++
    } else {
        flag = true;
    }
    if(flag) {
            temp += string[i];
    }
    
}

console.log(temp);


