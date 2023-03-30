const join = (a, b, c) => {
    return `${a}_${b}_${c}`
}

function curry(func) {
    return inner = (...y) => {
        if (y.length == func.length) {
            return func(...y)
        }
        return (...x) => inner(...y, ...x)
    }
}

const curriedJoin = curry(join)



console.log(curriedJoin(1, 2, 3)) // '1_2_3'

console.log(curriedJoin(1)(2,3)) // '1_2_3'

console.log(curriedJoin(1, 2)(3)) // '1_2_3'
