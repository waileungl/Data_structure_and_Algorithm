var findDuplicate = function(nums) {
    let map = new Object()
    for(const i of nums){
        map[i]? map[i]++ : map[i] = 1
    }
    
    for(const[key, values] of Object.entries(map)){
        console.log(key, values)
        if(values > 1) return key
    }

};


console.log(findDuplicate([3,1,3,4,2]))