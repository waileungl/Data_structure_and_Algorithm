random_array = [908, 2, 2000, 4, 66, 533, 67, 45];

function bubb(arr){
    let len = arr.length;
    for(var i = 0; i < len; i++){
        for(var j = 0; j < len - i - 1; j++){
            if (arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}

console.log(bubb(random_array));