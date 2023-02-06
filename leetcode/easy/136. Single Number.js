// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.


// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

function findSingle(nums){
    let dict = {};
    for(let i = 0; i < nums.length; i ++){
        if(!dict[nums[i]]){
            dict[nums[i]] = 1
        } else {
            delete dict[nums[i]]
        }
    }

    for (var key in dict) {
        return parseInt(key)
    }
}


// optimise

function findSingleOne(nums){
    let sum = 0;
    for(let i = 0; i < nums.length; i ++){
        sum ^= nums[i]
    }

    return sum
}
