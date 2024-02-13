// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".
// A string is palindromic if it reads the same forward and backward.
var firstPalindrome = function(words) {
    for(let i of words){
        if(i==i.split('').reverse().join('')){
            return i
        }
    }
    return ''
};
console.log(firstPalindrome(["abc","car","ada","racecar","cool"]))