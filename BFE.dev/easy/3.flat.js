function flat(arr, depth = 1) {
    console.log(arr, depth)
    if (depth === 0) return arr
    let res = new Array();
    for (let item of arr) {
        if (Array.isArray(item)) {
            res.push(...flat(item, depth--))
        } else {
            res.push(item)
        }
    }
    return res
}


const arr = [1, [2], [3, [4]]];

console.log(flat(arr))
// [1, 2, 3, [4]]

// console.log(flat(arr, 1))
// // [1, 2, 3, [4]]

// console.log(flat(arr, 2))
// // [1, 2, 3, 4]