// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

var thirdMax = function(nums) {
    nums=getDistinctElements(nums)
    let res=nums.sort((a,b)=>a-b)[nums.length-3]
    return res!=undefined?res:Math.max(...nums)
};
const getDistinctElements=(arr)=>{
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(arr.indexOf(arr[i],i+1)==-1){
            res.push(arr[i])
        }
    }
    return res
}