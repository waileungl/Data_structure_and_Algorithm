// ------------------- Problem 1----------------

// /* 
//   Given an int to represent how much change is needed
//   calculate the fewest number of coins needed to create that change,
//   using the standard US denominations
// /

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };


function change_dict(cents){
    nic = Math.floor(cents/5)
    dim = Math.floor(cents/10)
    quart = Math.floor(cents/25)
    change = {}
    if(quart){
        change[quarter] = quart
        cents -= quart * 25
    }
    if(dim){
        change[dime] = dim
        cents -= dim * 10
    }
    if(nic){
        change[nickel] = nic
        cents -= nic * 5
    }
    if(cents){
        change[penny] = cents
    }
    return change
}

// console.log(change_dict(cents1));
// console.log(change_dict(cents2));
// console.log(change_dict(cents3));
// console.log(change_dict(cents4));



// -------------- problem 2 ----------------
// for this problem, don't use any built-in sort function.

// / 
//     Missing Value
//     You are given an array of length N that contains, in no particular order,
//     integers from 0 to N . One integer value is missing.
//     Quickly determine and return the missing value.
// /

const nums1 = [3, 0, 1];
const expected5 = 2;

const nums2 = [3, 0, 1, 2];
const expected6 = null;
// Explanation: nothing is missing

// // / 
// //     Bonus: now the lowest value can now be any integer (including negatives),
// //     instead of always being 0. 
// // */

const nums3 = [2, -4, 0, -3, -2, 1];
const expected7 = -1;

const nums4 = [5, 2, 7, 8, 4, 9, 3];
const expected8 = 6;

function find_missing(arr){
    max = Math.max(...arr)
    min = Math.min(...arr)
    if ((max - min) != arr.length){
        return null
    }
    sum_expected = (max + min) * (arr.length + 1) / 2 
    sum_arr = 0
    for (let i = 0; i < arr.length; i++){
        sum_arr += arr[i]
    }
    return sum_expected - sum_arr
}


// function find_missing(inputArr){
//     let len = inputArr.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {
//             if (inputArr[j] > inputArr[j + 1]) {
//                 let tmp = inputArr[j];
//                 inputArr[j] = inputArr[j + 1];
//                 inputArr[j + 1] = tmp;
//             }
//         }
//     }
//     for (let i = 0; i < len - 1; i++) {
//         if (inputArr[i+1] - inputArr[i] != 1){
//             return inputArr[i] + 1
//         }
//     }
//     return null
// }

console.log(find_missing(nums1));
console.log(find_missing(nums2));
console.log(find_missing(nums3));
console.log(find_missing(nums4));