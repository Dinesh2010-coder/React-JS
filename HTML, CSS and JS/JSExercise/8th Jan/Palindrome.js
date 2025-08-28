function isPalindrome(num){
    const str = num.toString();
    const arr = str.split('');
    const reversed = arr.reverse();
    const reversedStr = reversed.join('');
    return str === reversedStr;
}

var num = 12321;
console.log(isPalindrome(num));

var num1 = 234567;
console.log(isPalindrome(num1));