var search = function(nums, target) {
    if(nums[0] === target) return 0
    let l = 0
    let r = nums.length - 1
    while(l < r){
        let mid = Math.floor((l + r)/2)
        if(nums[mid] === target){
            return mid
        }

        if(nums[mid] > nums[l]){
            if(target < nums[mid] && target > nums[l]){
                r = mid - 1
            }else{
                l = mid + 1
            }
        } else{
            if(target > nums[mid] && target < nums[r]){
                l = mid - 1
            }else{
                r = mid + 1
            }
        }
    }
    return -1
};