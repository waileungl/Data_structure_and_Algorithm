// https://opendsa-server.cs.vt.edu/embed/quicksortAV
// https://www.youtube.com/watch?v=ZZuD6iUe3Pc
// https://upload.wikimedia.org/wikipedia/commons/8/84/Lomuto_animated.gif


// Steps:
// 1. Pick an item out of the arr to be your pivot value
//   - usually the middle item or the last item
// 2. Partition the array IN PLACE such that all values less than the pivot are to the left of it
//    and all values greater than the pivot are to the right (not perfectly sorted)
// 3. return: new idx of the pivot value

// Params: arr, left, right
// - for now, left will be 0, and right will be the last idx
// - later these params will be used to specify a sub section of the array to partition

//                 arr, 0th idx,  last idxx
function Partition(arr){
    left = 0
    right = arr.length - 1
    pivot = Math.floor((left + right)/2)
    while (left <= right){
        while(arr[left] <= arr[pivot]){
            left++;
        }
        while(arr[right] >= arr[pivot]){
            right--;
        }
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++;
        right--;
    }
    [arr[right], arr[pivot]] = [arr[pivot], arr[right]]
    console.log(arr);
    return arr
}
arr = [10, 2, 4, 5, 7, 9]

Partition(arr)