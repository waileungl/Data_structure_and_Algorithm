
// ----------------Question 1 -----------------------

/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

------------- Question 2-------------------

/ 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).

  Return -1 if none exist.

*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1; 


function balance(array){
  leftSum = 0;
  sum = 0;
  result = [];
  for (var i = 0; i < array.length; i++){
    sum += array[i]
  }
  for (var j = 1; j < array.length; j++){
    leftSum += array[j-1]
    rightSum = sum - leftSum - array[j]
    if(leftSum == rightSum){
      result.push(j)
    }
  }
  if (result.length == 0){
    return -1
  }
  return result
}

function balance2(array){
  leftSum = 0;
  sum = 0;
  for (var i = 0; i < array.length; i++){
    sum += array[i]
  }
  for (var j = 1; j < array.length; j++){
    leftSum += array[j-1]
    rightSum = sum - leftSum - array[j]
    if(leftSum == rightSum){
      return j
    }
  }
  return -1
}

console.log(balance(nums1));
console.log(balance(nums2));