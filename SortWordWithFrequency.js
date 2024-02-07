// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.
// Return the sorted string. If there are multiple answers, return any of them

var frequencySort = function(s) {
    let map=new Map()
    for(let char of s){
        map.set(char,(map.get(char)||0)+1)
    }
    let sortedArray=Array.from(map.keys()).sort((a,b)=>map.get(b)-map.get(a))
    let result=''
    for(let k of sortedArray){
        result=result+k.repeat(map.get(k))
    }
    return result
};
console.log(frequencySort("Aabb"))