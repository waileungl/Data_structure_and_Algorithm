/* Coding Questions
{1,2,13,8} max = 13, min = 1, diff = 12
{10,4,7,5} max = 10, min = 4, diff = 6
{5,3,7,11} max = 11, min = 3, diff = 8
sum of all the differences of max and min on each row = 26 */

function arrChecker(...arr) {
    return arr.reduce((acc, curr) => acc + (Math.max(...curr) - Math.min(...curr)), 0)
}

// console.log(arrChecker([1, 2, 13, 8], [10, 4, 7, 5], [5, 3, 7, 11]))


/* Coding Questions
{11,2,12,9} 12%2 = 0, 12/2 = 6
{10,4,7,5} 10%5 = 0, 10/5 = 2
{5,3,6,11} 6%3 = 0, 6/3 = 2
sum of all the result 6 + 2 + 2 = 10 */

function arrChecker2(...arr) {
    let sum = 0;
    arr.forEach(item => {
        for (let i in item) {
            let factors = getFactors(item[i])
            factors.forEach(factor => {
                if (item.includes(factor)) {
                    sum += (item[i] / factor)
                }
            })
        }
    })
    return sum;
}

function getFactors(num) {
    let arr = new Array();
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            arr.push(i)
        }
    }
    return arr
}

console.log(arrChecker2([11, 2, 12, 9], [10, 4, 7, 5], [5, 3, 6, 11]))