let num = 3454;

function countDigit(n){
   if(n === 0) return;
   let count = 0;
   n = Math.abs(n);
   while(n > 0){
    n = Math.floor(n / 10);
    count++;
   }
   return count;
}

const result = countDigit(num);

console.log(result)
