s = "abc";
t = "ahbgdc";
x = "asscssb"

// brute force
var isSubsequence = function(s, t) {
    for (var i = t.length - 1; i >= 0; i--){
        if(t[i] == s[s.length - 1]){
            s = s.slice(0, -1)
        }
    }
    if(s.length) return false
    return true
};  

console.log(isSubsequence(s, t));