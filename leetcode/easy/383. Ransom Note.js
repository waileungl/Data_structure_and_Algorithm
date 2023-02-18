// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.


// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true


// Constraints:
// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

var canConstruct = function (ransomNote, magazine) {
    let dict = {}
    for (i in magazine) {
        if (dict[magazine[i]]) {
            dict[magazine[i]]++
        } else dict[magazine[i]] = 1
    }
    for (j in ransomNote) {
        if (dict[ransomNote[j]] && dict[ransomNote[j]] !== 0) {
            dict[ransomNote[j]]--
        } else return false
    }
    return true
};

ransomNote = "aa"
magazine = "aab"

console.log(canConstruct(ransomNote, magazine))