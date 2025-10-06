// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

let s = ["h","e","l","l","o"];

const reverseString = (s) => {
    let left = 0;
    let right = s.length-1;
    while(left < right){
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
}

reverseString(s)

console.log(s)