var countAndSay = function (n) {
    let base = "1"
    while (n > 1) {
        let say = ""
        let count = 1
        for (let i =0; i < base.length; i++) {
            if (base[i] == base[i + 1]) {
                count++
            } else {
                say += (count + base[i])
                count = 1
            }
        }
        base = say
        n--;
    }
    return base
};

console.log(countAndSay(4))