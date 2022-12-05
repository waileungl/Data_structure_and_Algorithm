/*//////////
    https://leetcode.com/problems/backspace-string-compare/

    BACKSPACE STRING COMPARE
    Given two strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.

    # character means a backspace character.

    i.e., after processing the backspaces, are the two strings equal?

    Bonus: solve in O(n) time

    Examples:

    Input: S = "ab#c", T = "ad#c" "ac" "ac"
    Output: true
    Explanation: Both S and T become "ac"

    Input: S = "ab##", T = "c#d#"
    Output: true
    Explanation: Both S and T become ""
        
    Input: S = "a##c", T = "#a#c"
    Output: true
    Explanation: Both S and T become "c"
*/


Input: S = "ab#c", T = "ad#c"
Output: true


var backspaceCompare = function(s, t) {
    let n1 = "";
    let n2 = "";
    for (let i = 0; i < s.length || i < t.length; i++){
        if(s[i] === "#"){
            n1 = n1.slice(0, -1)
        }
        if(s[i] != "#" && s[i] != undefined){
            n1 += s[i]
        }
        if(t[i] === "#"){
            n2 = n2.slice(0, -1)
        }
        if(t[i] != "#" && t[i] != undefined){
            n2 += t[i]
        }
        console.log(i, n1, n2);
    }
    if(n1 === n2){
        return true
    }
    return false
};

console.log(backspaceCompare(S, T));