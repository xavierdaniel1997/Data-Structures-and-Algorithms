/*

7. Reverse Integer
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21

*/
let x = -2345;

const reverse = (x) => {
    let rev = 0;
    let n = x
    x = Math.abs(x)
    while(x > 0){
        rem = x % 10;
        rev = (10 * rev) + rem;
        x = Math.floor(x / 10);
    }
    let limit = Math.pow(2, 31)
    if(rev < -limit || rev > limit) return 0;
    return (n < 0) ? -rev : rev;
};

const res = reverse(x)
console.log(res)