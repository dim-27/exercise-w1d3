//write code to capitalized first letter
//create initial variable
let words = "hello world my name is james and i want to make a difference in this world"
let result = "";
let splitWords = words.split(" ");
// console.log(splitWords);
let splitAlpha;

for(let i = 0; i < splitWords.length; i++) {
    splitAlpha = splitWords[i].split(""); 
    for(let j = 0; j < splitAlpha.length; j++) {
        if(j == 0) {
            result += splitAlpha[j].toUpperCase();
        } else {
            result += splitAlpha[j];
        }
    }
    result += " ";
}

// for(let i = 0; i < splitWords.length; i++) {
//     if(i != 0) {
//         result += splitWords[i];
//     }
// }


console.log(result);