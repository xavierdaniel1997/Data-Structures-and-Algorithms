// Example 1:

// Input: arr = [2,1]
// Output: false
// Example 2:

// Input: arr = [3,5,5]
// Output: false
// Example 3:

// Input: arr = [0,3,2,1]
// Output: true

let arr = [1, 3, 5, 4, 2]
let array = [[1, 3, 5, 4, 2], [0,3,2,1], [3,5,5]]

const validMountainArray = (arr) => {
    let n = arr.length;
    if(n < 3) return false;
    let i = 0;
    while(i+1 < n && arr[i] < arr[i+1]){
        i++;
    }
    if(i === 0 || i === n -1) return false;
    while(i+1 < n && arr[i] > arr[i+1]){
        i++;
    }
    return i === n -1;
}

// console.log(validMountainArray(arr))

array.map((arr) => (
    console.log(validMountainArray(arr))
))