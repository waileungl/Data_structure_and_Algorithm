// -------------1-  Binary Search------------ 

// /* 
//   Array: Binary Search (non recursive)
//   Given a sorted array and a value, return whether the array contains that value.
//   Do not sequentially iterate the array. Instead, ‘divide and conquer’,
//   taking advantage of the fact that the array is sorted .
//   Bonus (alumni interview): 
//     first complete it without the bonus, because they ask for additions
//     after the initial algo is complete
//     return how many times the given number occurs
// /

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 4;



function binary_search(arr, searchNum){
    left = 0
    right = arr.length - 1
    while (right >= left){
        mid = Math.floor((left + right)/2)
        if(searchNum === arr[mid]){
            return true
        } else if (searchNum > arr[mid]){
            left = mid + 1
        } else if (searchNum < arr[mid]){
            right = mid - 1
        }
    }
    return false
}


console.log(binary_search(nums4, searchNum4));







// -------------2:  interleaving  arrays:-------------------

// / 
//     Given two arrays, interleave them into one new array.
//     The arrays may be different lengths. The extra items should be added to the
//     back of the new array.
// */

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected5 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected6 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected7 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected8 = [42, 0, 6];


function interleaving(arr1, arr2){
    index = 0
    result = []
    while(index <= arr1.length || index <= arr2.length){
        if(arr1[index] != undefined){
            result.push(arr1[index])
        }
        if(arr2[index] != undefined){
            result.push(arr2[index])
        }
        index ++
    }
    return result
}

console.log(interleaving(arrA2, arrB2));