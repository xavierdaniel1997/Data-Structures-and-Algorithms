let arr = [5, 2, 8, 1, 3, 6];

console.log(arr)

const bubbleSort = (arr) => {
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-1-i; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr))