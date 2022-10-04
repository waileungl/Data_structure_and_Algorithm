
// ----1st  question:-------
// * 
//   Reverse Word Order
//   Given a string of words (with spaces)
//   return a new string with words in reverse sequence.
// */

const str1 = "This is a test";
const expected1 = "test a is This";

const str2 = "hello";
const expected2 = "hello";

const str3 = "   This  is a   test  ";
const expected3 = "test a is This";

function reverse(str){
  arr = str.split(' ')
  result = ''
  for(var i = arr.length - 1; i >= 0; i--){
    if(arr[i].trim() != '')
    result += arr[i] + ' '
  }
  return result
}

console.log(reverse(str1));
console.log(reverse(str2));
console.log(reverse(str3));



// ----------Question 2:-----------

/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str4 = "Y(3(p)p(3)r)s";
const expected4 = true;

const str5 = "N(0(p)3";
const expected5 = false;
// Explanation: not every parenthesis is closed.

const str6 = "N(0)t ) 0(k";
const expected6 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str7 = "a(b))(c";
const expected7 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing. 


function valid(str){
  checker = [];
  for (var i = 0; i < str.length; i++){
    if(str[i] == '('){
      checker.push(str[i]);
    }
    if(str[i] == ')' && checker[checker.length - 1] == '('){
      if(checker.pop(str[i]) != '('){
        return false
      }
    }
  }
  if(checker.length){
    return false
  }
  else{
    return true
  }
}


// console.log(valid(str4))
// console.log(valid(str5))
// console.log(valid(str6))
// console.log(valid(str7))


// -----------Question 3 :------------

// / 
// Braces Valid
// Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
// */

const str8 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected8 = true;

const str9 = "D(i{a}l[ t]o)n{e";
const expected9 = false;

const str10 = "A(1)s[O (n]0{t) 0}k";
const expected10 = false; 

function valid2(str){
  checker = [];
  for (var i = 0; i < str.length; i++){
    if(str[i] == '(' || str[i] == '{' || str[i] == '['){
      checker.push(str[i]);
    }
    if(str[i] == ')' && checker[checker.length - 1] == '('){
      if(checker.pop(str[i]) != '('){
        return false
      }
    }
    if(str[i] == '}' && checker[checker.length - 1] == '{'){
      if(checker.pop(str[i]) != '{'){
        return false
      } 
    }
    if(str[i] == ']' && checker[checker.length - 1] == '['){
      if(checker.pop(str[i]) != '['){
        return false
      } 
    }
    
  }
  if(checker.length){
    return false
  }
  else{
    return true
  }
}


// console.log(valid2(str8));
// console.log(valid2(str9));
// console.log(valid2(str10));
