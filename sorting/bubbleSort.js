let arr = [5, 2, 8, 1, 3, 6];

console.log(arr)

const bubbleSort = (arr) => {
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    // return arr;
}

// console.log(bubbleSort(arr))
bubbleSort(arr);
console.log(arr)