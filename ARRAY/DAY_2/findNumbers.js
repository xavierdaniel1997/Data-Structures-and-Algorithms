// Input: nums = [12,345,2,6,7896]
// Output: 2

let nums = [12,345,2,6,7896];

const findNumbers = (nums) => {
    let count = 0;
    for(let num of nums){
        if(num.toString().length % 2 === 0){
            count++
        }
    }
    return count;
}

const result = findNumbers(nums);
console.log(result)