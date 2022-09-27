/* 
Book Index
Given an array of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums
span a consecutive range.
*/

const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";

const nums2 = [5, 6, 7, 8, 9];
const expected2 = "5-9";

const nums3 = [1, 2, 3, 7, 9, 15, 16, 17];
const expected3 = "1-3, 7, 9, 15-17";

function bookIndex(arr){
    var result = "";
    for(i = 0; i < arr.length; i++){
        count = 0;
        if(arr[i + 1] == arr[i] + 1){
            while (arr[i + 1] == arr[i] + 1) {
                count ++;
                i++;
            }
            result += (arr[i-count] + '-');
        }
        if(i < arr.length-1){
            result += (arr[i] + ',');
        }
        else if(i == arr.length - 1){
            result += (arr[i])
        }
    }

    return result;
}


console.log(bookIndex(nums1))