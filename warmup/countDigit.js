let num = 345;

function countDigit(n){
    if(n === 0) return;
    
    n = Math.abs(n);

    let count = 0;

    while(n > 0){
        n = Math.floor(n /10);
        count++;
    }
    return count;
}

const result = countDigit(num);

console.log(result)