//reverse a string
//intiate a word

function reverseString(word) {
    let result = "";
    for(let i = word.length - 1; i >= 0; i--) {
        result += word[i]
    }
    return result;
}


console.log(reverseString("gellowodlr"));
console.log(reverseString("purwadhika"));
