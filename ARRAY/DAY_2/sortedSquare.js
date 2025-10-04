// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

let nums = [-4,-1,0,3,10]


//usnig O(n);

const sortedSquare = (nums) => {
    let n = nums.length;
    let left = 0, right = n-1;
    let res = new Array(n);
    let pos = n-1;
    while(left <= right){
        if(Math.abs(nums[left]) > Math.abs(nums[right])){
            res[pos] = nums[left] ** 2;
            left++;
        }else{
            res[pos] = nums[right] ** 2;
            right--;
        }
        pos--;
    }
    return res;
}

const result = sortedSquare(nums)
console.log(result)