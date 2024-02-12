// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
var majorityElement = function(nums) {
    let middle=~~(nums.length/2)
    return nums.sort((a,b)=> a-b)[middle]
};
console.log(majorityElement([1,2,1,2,1,3,1,1]))