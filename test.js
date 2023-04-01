function sum(num1) {
    function sum1(num2, currSum = res) {
        return sum(num1 + num2)
    }

    sum1.toString = () => num1
    return res
}


// const sum1 = sum(1)
// console.log(sum1(2)) // true == 3
// console.log(sum1(3)) // true == 4
console.log(sum(1)(2)(3)) // true == 6
// console.log(sum(5)(-1)(2))  // true == 6)

