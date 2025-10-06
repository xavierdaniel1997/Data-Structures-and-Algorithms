// Input: nums = [4,1,2,1,2]

// Output: 4

let nums = [4,1,2,1,2]

const singleNumber = (nums) => {
    let freq = {};
    for(let num of nums){
       freq[num] = (freq[num] || 0) + 1
    }
    for(let val in freq){
        if(freq[val] === 1){
            return val
        }
    }
}

console.log(singleNumber(nums))

var singleNumberXOR = function(nums) {
    let result = 0;
    for (let num of nums) {
        result ^= num;  // XOR each number
    }
    return result;
};
