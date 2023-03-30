const array= [2,4,10,[12,4,[100,99],4],[3,2,99],0];

const getMax = (arr, max=-Infinity) => {
    for(let i in arr){
        if(Array.isArray(arr[i])){
            max = getMax(arr[i], max)
        }else{
            if(arr[i] > max){
                max = arr[i]
            }
        }
    }

    return max
}

console.log(getMax(array))