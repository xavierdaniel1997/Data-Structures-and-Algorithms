// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

let nums = [0,1,0,3,12];

console.log("befor sorting", nums)
const moveZeroes = (nums) => {
    let index = 0;
    for(let num of nums){
        if(num != 0){
            nums[index++] = num;
        }
    }
    while(index < nums.length){
        nums[index++] = 0;
    }
}

moveZeroes(nums)
console.log("nums", nums)