var moveZeroes = function(nums) {
    let len=nums.length
    let i=0;
    for(let j=0;j<len;j++){
        if(nums[j]!=0){
            nums[i]=nums[j]
            i++
        }
    }
    for(i;i<len;i++){
        nums[i]=0
    }

    return nums
};
console.log(moveZeroes([0,2,1,0,4,5]))