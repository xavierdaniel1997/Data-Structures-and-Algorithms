let arr = [2, 3, 87, 23, 21, 7, 84, 55], target = 44;

const linearSearch = (arr, target) => {
    for(let i=0; i<arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(arr, target))