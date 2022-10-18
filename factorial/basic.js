num1 = 3;
num2 = 5;

count = 1
function factRec(n){
    if(n == 1) return 1
    count ++;
    console.log(count);
    return n * factRec(n - 1)
}

console.log(factRec(num1));