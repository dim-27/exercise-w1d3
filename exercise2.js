//create a program to check if it is palindrome or not
//create string

function checkPalindrome(words) {
    let temp = words.toLowerCase();
    let start = 0;
    let end = words.length - 1;
    let isPalindrome = true;
    
    while (start < end) {
        if(temp[start] != temp[end]) {
            isPalindrome = false;
            break;
        }
        start++;   
        end--;
    }

    if(isPalindrome) {
        console.log(`${temp} is a palindrome`);
    } else {
        console.log(`${temp} is not a palindrome`);
    }
}

checkPalindrome('palindrome');
checkPalindrome('alia');
checkPalindrome('Dad');
checkPalindrome('mom');
checkPalindrome('kayak');
checkPalindrome('madam');
checkPalindrome('racecar');