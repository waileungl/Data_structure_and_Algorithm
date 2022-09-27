/* 
Given an arr and a separator string, output a string of every item in the array separated by the separator.

No trailing separator at the end
Default the separator to a comma with a space after it if no separator is provided
*/

const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";

function separate(arr, separator) {
    var string =  "";
    for (var i = 0; i < arr.length; i++){
        string += separator + arr[i];
    }
    console.log(string.substring(1))
}

console.log(arr1.join(separator1));
separate(arr1, separator1)




    // var arrayWithSeparator = [];
    // for (var i = 0; i < arr.length; i++){
    //     arrayWithSeparator.push(arr[i]);
    //     arrayWithSeparator.push(separator);
    // }
    // arrayWithSeparator[arrayWithSeparator.length - 1] = " ";