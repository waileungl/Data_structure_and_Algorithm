keys = ["a" , "b" , "c"]
values = ["1", "2", "3"]
dict = {}


dict2 = {
    name: 'John',
    age: 37,
    favFood: 37,
    pokemon: 37,
    color: 37,
    
}

function zipArr(arr1, arr2){

    for(i=0; i<arr1.length; i++ ){
        dict[arr1[i]] = arr2[i]
    }
    return dict
}
// console.log(zipArr(keys, values));


function swapHash(hash){
    newArr = [];
    arr2 = [];
    dict3 = {};
    multiArr = [];
    for (const key in hash) {
        if (arr2.includes(hash[key]) && !(newArr.includes(multiArr))){
            multiArr.push(key)
            newArr.push(multiArr)
        }
        else{
            newArr.push(key)
            arr2.push(hash[key])
        }
    }
    // for(i=0; i<arr2.length; i++ ){
    //     dict3[arr2[i]] = newArr[i]
    // }
    return (newArr)
}

// function swapHash2()

console.log(swapHash(dict2));