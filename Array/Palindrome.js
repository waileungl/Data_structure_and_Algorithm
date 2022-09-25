function isPal(arr) {
    for(var left=0; left < arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}

// if we didnt put Math.floor(), in result1:
// left < 2.5, which check arr[0] arr[1] arr[2], right arr[4] arr[3] arr[2], both left and right will check one more time in arr[2].

var result1 = isPal( [1, 3, 2, 3, 1] );
console.log(result1);
    
var result2 = isPal( [2, 1, 2, 3, 1, 2] );
console.log(result2);