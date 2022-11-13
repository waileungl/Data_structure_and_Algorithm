// find consecutive sum of an array 
arr = [1, 3, 5, 7, 0, 8, 0]
target = 8
expected = [[3, 5], [0, 8], [0, 8, 0], [8], [8, 0]]

function conSum(arr, k){
    output = []
    i = 0;
    j = 0;
    while(i < arr.length){
        sum = arr[i]
        while(sum < k){
            j++;
            sum += arr[j];
        }
        while(sum == k){
            output.push(arr.slice(i, j+1))
            j++;
            sum += arr[j];
        }
        i++;
        j = i;
    }
    return output
}

console.log(conSum(arr, target));