
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