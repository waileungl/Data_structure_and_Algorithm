// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

function anagram(s, t) {
    let dict = {};
    for (let i in s) {
        if (dict[s[i]]) {
            dict[s[i]]++
        } else {
            dict[s[i]] = 1
        }
    }
    for (let j in t) {
        if (dict[t[j]]) {
            dict[t[j]]--
        } else {
            dict[t[j]] = 1
        }
    }
    for (const k in dict) {
        if (dict[k] !== 0) return false
    }
    return true
}

s = "rat"
t = "car"

console.log(anagram(s, t))