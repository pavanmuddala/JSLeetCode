// Day 01 (feb 06 2024)
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

const twoSum=(arr,target)=>{
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==target){
                return [i,j]
            }
        }
    }
    return false
}

console.log(twoSum([12,2,2,4],4))
console.log(twoSum([6,0,1,1],6))
console.log(twoSum([10,10,10,20,30],30))
console.log(twoSum([2,3,4,5,6],7))
console.log(twoSum([1,2,3,4,5],0))