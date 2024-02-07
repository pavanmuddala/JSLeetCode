// Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function(x) {
    let temp=x;
    let k=0;
    while(temp>0){
        const digit=temp%10;
        k=(k * 10)+digit
        temp=~~(temp/10)
    }        
    if(k===x){
        return true
    }
    else{
        return false
    }
};
console.log(isPalindrome(121))