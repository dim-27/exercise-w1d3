//turn a into an *

let words = "An apple a day keeps the doctor away"
let result = ""
let convert = words.toLowerCase();
let flag = false;

for(let i = 0; i < convert.length; i++) {
    if (convert[i] == "a") {
        result += '*'
        
    } else {
        result += convert[i];
    }
}

console.log(result);