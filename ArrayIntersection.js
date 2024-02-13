// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let res=[]
    for(let i of nums1){
        nums2.includes(i)?(res.includes(i)?(''):(res.push(i))):('')
    }
    return res
};
console.log(intersection([1,2,2,3],[1,2,4]))