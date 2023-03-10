// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


var isPalindrome = function(x) {
    let str = x.toString()
    console.log(str)
    if(str.length === 1) return true
    let r = str.length - 1
    for(let l = 0; l < Math.floor(str.length/2); l++){
        console.log(str[l], str[r])
        if(!(str[l] === str[r])) return false
        r --
    }
    return true
};


console.log(isPalindrome(1001))