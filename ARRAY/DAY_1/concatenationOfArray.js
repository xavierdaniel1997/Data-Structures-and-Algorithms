// Input: nums = [1,3,2,1]
// Output: [1,3,2,1,1,3,2,1]

let nums = [1, 3, 2, 1];

const getConcatenation1 = (nums) => {
    const res = [];
    for(let i=0; i<nums.length; i++){
        res[i] = nums[i];
        res[nums.length + i] = nums[i];
    }
    return res;
}

const result1 = getConcatenation1(nums)
console.log("result1", result1)

const getConcatenation2 = (nums) => {
    const ans = nums.concat(nums);
    return ans;
}

const result2 = getConcatenation2(nums);
console.log("result2", result2)