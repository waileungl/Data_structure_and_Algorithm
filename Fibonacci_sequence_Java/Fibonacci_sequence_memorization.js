// /* 
//   Return the fibonacci number at the nth position, recursively.

//   Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//   The next number is found by adding up the two numbers before it,
//   starting with 0 and 1 as the first two numbers of the sequence.
// */

const num1 = 0;
const expected1 = 0;

const num2 = 1;
const expected2 = 1;

const num3 = 2;
const expected3 = 1;

const num4 = 3;
const expected4 = 2;

const num5 = 4;
const expected5 = 3;

const num6 = 8;
const expected6 = 21;


const results = {}

function fib(n) {
    if (n <= 1){
        results[n] = n 
        return n
    }
    if (n in results){
        return results[n]
    } 
    results[n] = fib(n - 2) + fib(n - 1)
    return results[n]
}

fib(8);

console.log(results);