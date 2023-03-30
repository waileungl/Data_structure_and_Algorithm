/* Coding Questions
{1,2,13,8} max = 13, min = 1, diff = 12
{10,4,7,5} max = 10, min = 4, diff = 6
{5,3,7,11} max = 11, min = 3, diff = 8
sum of all the differences of max and min on each row = 26 */

function arrChecker(...arr){
    return arr.reduce((acc, curr) => {
        return acc + (Math.max(...curr) - Math.min(...curr)) 
    }, 0)
}

console.log(arrChecker([1,2,13,8],[10,4,7,5],[5,3,7,11]))