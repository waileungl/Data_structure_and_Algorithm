var coinChange = function (coins, amount) {
    if(amount === 0) return 0
    if (coins.length === 1) {
        if (amount % coins[0] === 0) {
            return amount/coins[0]
        }  else {
            return -1
        }
    }

    let max = Math.max(...coins)
    if (coins.includes(amount % max)) {
        return Math.floor(amount / max) + 1
    }else{
        coins.pop()
        coinChange(coins, amount)
    }
};