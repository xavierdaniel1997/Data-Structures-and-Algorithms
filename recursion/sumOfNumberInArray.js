let arr = [2, 5, 1, 3, 0, 4];


const sum = (n) => {
  if(n == 0){
    return arr[n]
  }
  return arr[n] + sum(n - 1)
}

console.log(sum(arr.length-1))


const sumOfOdd = (n) => {
  let isOdd = arr[n] % 2 !== 0;
  if(n === 0){
    if(isOdd){
        return arr[n]
    }else{
        return 0;
    }
  }
 if(isOdd){
     return arr[n] + sumOfOdd(n - 1)
 }else{
    return 0 + sumOfOdd(n - 1)
 }
}

console.log(sumOfOdd(arr.length-1))