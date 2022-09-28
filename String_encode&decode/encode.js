// Good W1D3 Morning,

// Problems for today: 1- Encode String and 2- Decode String!

// Encode string:
//   Given in an alumni interview in 2021.
//   String Encode
//   You are given a string that may contain sequences of consecutive characters.
//   Create a function to shorten a string by including the character,
//   then the number of times it appears.

//   If final result is not shorter (such as "bb" => "b2" ),
//   return the original string.

const str1 = 'aaaabbcddd';
const expected1 = 'a4b2c1d3';

const str2 = '';
const expected2 = '';

const str3 = 'a';
const expected3 = 'a';

const str4 = 'bbcc';
const expected4 = 'bbcc';

function encode(str) {
  var newStr = '';
  for (i = 0; i < str.length; i++) {
    let counter = 1;
    if (str[i + 1] === str[i]) {
      while (str[i + 1] == str[i]) {
        i++;
        counter++;
      }
    }
    newStr += str[i] + counter;
  }
  if (str.length <= newStr.length) {
    return str;
  }
  return newStr;
}

// console.log(encode(str1));
// console.log(encode(str2));
// console.log(encode(str3));
// console.log(encode(str4));


