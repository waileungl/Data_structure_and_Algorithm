var nums = [
    [1, 2, 3], 
    [4, 5, 6],
    [7, 8, 9]
];

function flatten(arr2d) {
    var flat = [];
    for (var i=0; i<arr2d.length; i++) {
        for (var j=0; j<arr2d[i].length; j++)
            flat.push(arr2d[i][j]);
    }
    return flat;
}

function isPresent2d(arr2d, value) {
    for (var i=0; i<arr2d.length; i++) {
        for (var j=0; j<arr2d[i].length; j++)
            if(arr2d[i][j] == value){
                return true;
            } 
            return false;
    }
}


//var result = flatten(nums);
var result = isPresent2d(nums, 99);
console.log(result);

