function permutation(str){
    let temp= "";
    let result = [];
    let original = str;
    for(i = 0; i < str.length; i++){
        temp = str[i];
        k = i
        while(original[original.length - 1] != str[k]){
            str[k] = str[k+1]
            str[k+1] = temp
            k++
            result.push(str)
        }
        if(temp == original[original.length-1]){
            let lastStr = "";
            for(j = original.length-1; j >= 0; j--){
                lastStr += original[j]
            }
            result.push(lastStr)
        }
    }
    return result
}

str = 'ABC'

console.log(pexmutation(str));