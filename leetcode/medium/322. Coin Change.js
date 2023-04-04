// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.


// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:

// Input: coins = [2], amount = 3
// Output: -1

// Example 3:

// Input: coins = [1], amount = 0
// Output: 0


// Constraints:

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104


var coinChange = function (coins, amount) {
    console.log(coins)
    coins.sort((a , b) => a - b)
    console.log(coins)
    let count = 0;
    while (amount > 0) {
        if(coins.length === 0) return -1
        let max = coins.pop()
        count += Math.floor(amount / max)
        if (amount % max === 0){
            return count
        } else{
            amount = amount % max
        }
    }
    return count
};

console.log(coinChange([1, 2, 5, 10], 18))