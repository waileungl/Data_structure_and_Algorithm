/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;
    let min = prices[0];
    for (let i in prices) {
        min = Math.min(prices[i], min)
        profit = Math.max(prices[i] - min, profit)
    }
    return profit
};