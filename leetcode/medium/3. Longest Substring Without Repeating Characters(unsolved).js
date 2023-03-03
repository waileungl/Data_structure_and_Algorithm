// Given a string s, find the length of the longest
// substring
//  without repeating characters.



//Example 1
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.


// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.


// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

//     Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.


const lengthOfLongestSubstring = function(s) {
    if (!s) return 0;
    let obj = {};
    let len = 0;
    let max = 1;
    for(let i = 0; i < s.length; i++){
        if(Number.isInteger(obj[s[i]])){
            len -= obj[s[i]];
            obj[s[i]] = i;
        }else{
            obj[s[i]] = i;
            len ++;
        }
        if(max < len) max = len;
    }
    if(s[0] === s[s.length - 1]) max ++;
    return max
};

//
// let s = "abcabcbb";
let s = "tmmzuxt";
console.log(lengthOfLongestSubstring(s))