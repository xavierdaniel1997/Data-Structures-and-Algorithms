// Input: s = "loveleetcode"

// Output: 2

let  s = "loveleetcode";
// let s = "aabbcc"

const firstUniqChar = (s) => {
    let freq = {};
    for(let i=0; i<s.length; i++){
        if(freq[s[i]]){
            freq[s[i]]++;
        }else{
            freq[s[i]] = 1;
        }
    }
    // console.log(freq)
    for(let i=0; i<s.length; i++){
        if(freq[s[i]]===1){
            return i;
        }
    }
    return -1
}
console.log(firstUniqChar(s))
// firstUniqChar(s)


