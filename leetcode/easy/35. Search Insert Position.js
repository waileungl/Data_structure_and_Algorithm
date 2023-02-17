// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2
///
// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1
//
// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4
//
// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

const searchInsert = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    const binarySearch = (left, right, target) => {
        if (left > right) {
            return left;
        }
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] > target) {
            return binarySearch(left, mid - 1, target);
        } else {
            return binarySearch(mid + 1, right, target);
        }
    };

    return binarySearch(left, right, target);
};

const nums = [1, 3, 5, 6];
const target = 4;
console.log(searchInsert(nums, target)); // false