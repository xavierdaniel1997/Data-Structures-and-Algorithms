// Input: nums = [9,6,4,2,3,5,7,0,1]

// Output: 8

let nums = [9,6,4,2,3,5,7,0,1];

const missingNumber = (nums) => {
    let n = nums.length;
    let totalSum = n * (n + 1) / 2;
    let numSum = 0;
    for(let num of nums){
        numSum += num;
    }
    return totalSum - numSum;
}

console.log(missingNumber(nums))