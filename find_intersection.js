// find the intersection between two array
arr1 = [1, 1, 1, 2, 2, 3, 3, 4, 7, 8]
arr2 = [1, 1, 2, 2, 3, 4, 4, 5, 5]
expected = [1, 2, 3, 4]

// brute force:
function brute(arr1, arr2){
    newArr = [];
    for(i = 0; i < arr1.length; i++){
        if(arr1[i] != arr1[i+1]){
            newArr.push(arr1[i])
        }
    }
    for(j = 0; j < arr2.length; j++){
        if (!(newArr.includes(arr2[j]))){
            newArr.pop(arr2[j])
        }
    }
    return newArr
}
console.log(brute(arr1, arr2));

// Hash map
function hash(arr1, arr2){
    hash = {}
    newArr = []
    for(i = 0; i < arr1.length; i++){
        hash[arr1[i]] = true;
    }
    for(j = 0; j < arr2.length; j++){
        if(hash[arr2[j]] == true){
            newArr.push(arr2[j])
            hash[arr2[j]] = false
        }
    }
    return newArr
}

console.log(hash(arr1, arr2));

// one line brute force
console.log(Array.from(new Set([...arr1].filter((a) => arr2.includes(a)))));
