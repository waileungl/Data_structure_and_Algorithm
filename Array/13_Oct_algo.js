// ------------  problem 1 ---------------

// /* 
//     Given a SORTED array of integers, dedupe the array 
//     Because array elements are already in order, all duplicate values will be grouped together.
//     Ok to use a new array
//     Bonus: do it in O(n) time (no nested loops, new array ok)
//     Bonus: Do it in-place (no new array)
//     Bonus: Do it in-place in O(n) time and no new array
//     Bonus: Keep it O(n) time even if it is not sorted
// /

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 1];
const expected4 = [1];


function dedupe_array(arr){
    map = {}
    for(i = 0; i < arr.length; i++){
        map[arr[i]] = arr[i]
    }
    return Object.keys(map)
}

// console.log(dedupe_array(nums1));
// console.log(dedupe_array(nums2));
// console.log(dedupe_array(nums3));



// -------------problem 2 -----------------------

// / 
//     Given an array of integers
//     return the first integer from the array that is not repeated anywhere else
//     If there are multiple non-repeated integers in the array,
//     the "first" one will be the one with the lowest index.
// */

const nums1 = [3, 5, 4, 3, 4, 6, 5];
const expected1 = 6;

const nums2 = [3, 5, 5];
const expected2 = 3;

const nums3 = [3, 3, 5];
const expected3 = 5;

const nums4 = [5];
const expected4 = 5;

const nums5 = [];
const expected5 = null;


function first_integer(arr){
    map = {}
    for(i = 0; i < arr.length; i++){
        if(map[arr[i]]){
            map[arr[i]] ++
        }else{
            map[arr[i]] = 1
        }
    }
    for (keys in map){
        if (map[keys] == 1){
            return keys
        }
    }
    return null
}

console.log(first_integer(nums1));
console.log(first_integer(nums2));
console.log(first_integer(nums3));
console.log(first_integer(nums4));
console.log(first_integer(nums5));
