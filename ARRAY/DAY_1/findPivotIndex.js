// Input: nums = [1,7,3,6,5,6]
// Output: 3

let nums = [1,7,3,6,5,6]

const findPivot = (nums) => {
    let rightSum  = 0;
    for(let num of nums){
        rightSum += num;
    }
    let leftSum = 0;
    for(let i=0; i<nums.length; i++){
        rightSum -= nums[i];
        if(leftSum === rightSum){
            return i;
        }
        leftSum += nums[i]
    }
    return -1
}


const result = findPivot(nums)
console.log(result)