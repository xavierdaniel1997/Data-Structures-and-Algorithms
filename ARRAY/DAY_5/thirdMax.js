// Input: nums = [2,2,3,1]
// Output: 1

let nums = [2,2,3,1,5];

const thirdMax = (nums) => {
    let first = -Infinity, second = -Infinity, third = -Infinity;
    for(let num of nums){
        if(num === first || num === second || num === third) continue;
        if(num > first){
            third = second;
            second = first;
            first = num;
        }else if(num > second){
            third = second;
            second = num;
        }else if(num > third){
            third = num;
        }
    }
    return third === -Infinity ? first : third;
}

console.log(thirdMax(nums))