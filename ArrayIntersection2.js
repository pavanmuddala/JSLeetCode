// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

var intersect = function(nums1, nums2) {
    let res=[]
    nums1=nums1.sort((a,b)=>a-b)
    nums2=nums2.sort((a,b)=>a-b)
    
    let i=0
    let j=0
    while(i<nums1.length && j<nums2.length){
        if(nums1[i]==nums2[j]){
            res.push(nums1[i])
            i++
            j++
        }
        else if(nums1[i]>nums2[j]){
            j++
        }
        else{
            i++
        }
    }
    return res
};
console.log(intersect([1,2,1,2,3,4],[1,2,3,2,4]))