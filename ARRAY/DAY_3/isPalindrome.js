// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

let char = "A man, a plan, a canal: Panama"

function isAlphanumeric(char) {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) ||   // 0–9
    (code >= 97 && code <= 122)     // a–z
  );
}



var isPalindrome = function(s) {
    s = s.toLowerCase()
    let i = 0, j = s.length - 1
    while(i < j) {
        while(i < s.length && !isAlphanumeric(s[i])) i++
        while(j >= 0 && !isAlphanumeric(s[j])) j--
        if(i >= j) break
        if(s[i] !== s[j]) return false
        i++
        j--
    }
    return true
};

console.log(isPalindrome(char))