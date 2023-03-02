// First algorithm:

/* 
Given an array of strings
return the number of times each string occurs (a frequency / hash table)
*/

// const arr1 = ["a", "a", "a"];
// const expected1 = {
//     a: 3,
// };
//
// const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
// const expected2 = {
//     a: 2,
//     b: 1,
//     c: 3,
//     B: 1,
//     d: 1,
// };

// const arr3 = [];
// const expected3 = {}

function makedict(arr){
    var dict = {};
    for (var i = 0; i < arr.length; i++){
        if (arr[i] in dict == false){
            dict[arr[i]] = 1;
        }
        else{
            dict[arr[i]] += 1;
        }
    }
    return dict
}


// console.log(makedict(arr3));



// 2 nd problem:
/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

// const nums1 = [1];
// const expected1 = 1;

// const nums2 = [5, 4, 5];
// const expected2 = 4;

// const nums3 = [5, 4, 3, 4, 3, 4, 5];
// const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

// const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
// const expected4 = 1; 

function checkdict(arr){
    dict = makedict(arr)
    for ([key, value] of Object.entries(dict)){
            if (value % 2){
                return key
        }
    }
}
// console.log(checkdict(nums1));



// 3rd problem:

/* 
Given a string,
return a new string with the duplicates excluded
Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";


function makestr(str){
    arr = str.split('')
    var str = '';
    for (var i = 0; i < arr.length; i++){
        if (! str.includes(arr[i])){
            str += arr[i];
        }
    }
    return str
}

console.log(makestr(str2));