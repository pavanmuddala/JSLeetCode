//  Day 01 (feb 06 2024)
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

const getAnagrams=(strArr)=>{
    let map=new Map()
    for (i of strArr){
        let key=i.split("").sort().join()
        if(!map.has(key)){
            map.set(key,[])
        }
        map.get(key).push(i)
    }
    return Array.from(map.values())
}
console.log(getAnagrams(['ant','tan','nta','bat','tae']))
