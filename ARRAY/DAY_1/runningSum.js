// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]

let nums = [1, 2, 3, 4];

const runningSum = (nums) => {
    let res = [];
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        sum += nums[i];
        res[i] = sum;
    }
    return res;
}

const result = runningSum(nums)
console.log(result)