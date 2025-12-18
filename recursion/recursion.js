function recursion(x){
    let n = 5
   if(x > n) return;
   console.log(x)
   recursion(++x)

}

recursion(1)