// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


function findPrefix (strs) {
    let prefix = "";
    for(let i = 0; i < strs[0].length; i++){
        for(let j = 0; j < strs.length; j++){
            if(j > 0 && strs[j][i] !== strs[j - 1][i]){
                return prefix
            }
            if(j == strs.length - 1){
                prefix += strs[j][i]
            }
        }
    }
    return prefix;
}

strs = ["dog","racecar","car"];
console.log(findPrefix(strs))