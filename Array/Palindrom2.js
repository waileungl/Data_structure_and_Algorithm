// Problem2:

// / 
//   Longest Palindrome
//   For this challenge, we will look not only at the entire string provided,
//   but also at the substrings within it.
//   Return the longest palindromic substring. 
//   Strings longer or shorter than complete words are OK.
//   All the substrings of "abc" are:
//   a, ab, abc, b, bc, c
// */

// const { isPalindrome } = require("../isPalindrome");

const str1 = "what up, daddy-o?";
const expected1 = "dad";

const str2 = "uh, not much";
const expected2 = "u";

const str3 = "Yikes! my favorite racecar erupted!";
const expected3 = "e racecar e";

const str4 = "a1001x20002y5677765z";
const expected4 = "5677765";

const str5 = "a1001x20002y567765z";
const expected5 = "567765";

console.log(check(str2))

function check(str) {
    temp = "";
    pal_bank = [];
    for(var i = 0; i < str.length; i++) {
        for(var j = 0; j < str.length; j++){
            temp = str.slice(i, str.length - j);
            if(is_pal(temp) && (temp.length > 0)){
                pal_bank.push(temp);
            }
        }
    }
    answer = "";
    for(var k = 0; k < pal_bank.length; k++){
        if(pal_bank[k].length > answer.length){
            answer = pal_bank[k];
        }
    }
    return answer
}



function is_pal(string) {
    for (i=0; i < string.length/2; i++) {
        if (string[i] == string[string.length-1-i]) {
            continue;
        } else {
        return false;
        }
    }
    return true;
}


//console.log(is_pal("asussa"));



