// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

let nums = [3,1,2,4];

const sortArrayByParity = (nums) => {
    let left = 0;
    let right = nums.length-1;
    while(left <= right){
        if(nums[left] % 2 === 0){
            left++;
            continue;
        }
        if(nums[right] % 2 === 0){
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++;
        }
        right--;
    }
    return nums;
}

const result = sortArrayByParity(nums);
console.log(result)