// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
var missingNumber = function(nums) {
    let l=nums.length
    let sum=0
    let sumOfNNums=l*(l+1)/2
    nums.map(f=>sum=sum+f)
    return (sum==sumOfNNums? 0 : sumOfNNums-sum)
};
console.log(missingNumber([0,1,2,4]))