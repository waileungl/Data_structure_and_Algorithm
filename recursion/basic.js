// ------  problem 1:-------------

// /* 
// Recursive Sigma
// Input: integer
// Output: sum of integers from 1 to Input integer
// */

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

// function recurs(num){
//     num = Math.floor(num)
//     if (num < 0) return 0; 
//     if (num == 1) return 1;
//     return recurs(num - 1) + num;
// }

// console.log(recurs(num1));
// console.log(recurs(num2));
// console.log(recurs(num3));


// ------------- Problem 2---------------------

// / 
//   Recursively sum an arr of ints
// */

const nums1 = [1, 2, 3];
const expected4 = 6;

const nums2 = [1];
const expected5 = 1;

const nums3 = [];
const expected6 = 0;

function recursSum(arr){
    if (arr.length == 0) return 0;
    base = arr.pop();
    return  base + recursSum(arr);
}

console.log(recursSum(nums1));
