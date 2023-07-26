//swap case character

// let words = "The QuiCk BrOwN Fox"
// let flag = false;
// let result = "";

// for(let i = 0; i < words.length; i++) {
//     if(words[i] === words[i].toUpperCase()) {
//         result += words[i].toLowerCase();
//     } else {
//         result += words[i].toUpperCase();
//     }
// }

let words = "The QuiCk BrOwN Fox’"
let alphabet = "abcdefghijklmnopqrstuvwxyz"
let flag = false;
let result = "";

for(let i = 0; i < words.length; i++) {
    for(let j = 0; j < alphabet.length; j++) {
        if (words[i] === alphabet[j]) {
            flag = true;
            break;
        }
    }
    if(flag === true) {
        result += words[i].toUpperCase();
    } else {
        result += words[i].toLowerCase();
    }
    flag = false;
}

console.log(result);

