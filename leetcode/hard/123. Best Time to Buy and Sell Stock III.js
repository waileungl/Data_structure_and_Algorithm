/*You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete at most two transactions.

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).


Example 1:
Input: prices = [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.

Example 2:
Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.

Example 3:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0. */

var maxProfit = function (prices) {
    let n = prices.length;
    let maxProfit1 = 0, maxProfit2 = 0;
    let minPrice1 = prices[0], minPrice2 = prices[0];
    
    for (let i = 0; i < n; i++) {
        // compute the maximum profit for one transaction up to day i
        maxProfit1 = Math.max(maxProfit1, prices[i] - minPrice1);
        minPrice1 = Math.min(minPrice1, prices[i]);
        
        // compute the maximum profit for two transactions from day i
        maxProfit2 = Math.max(maxProfit2, prices[n-1-i] - minPrice2);
        minPrice2 = Math.min(minPrice2, prices[n-1-i]);
        
        // compute the overall maximum profit for two transactions
        // by adding the maximum profit up to day i and the maximum
        // profit from day i to the end of the array
        maxProfit = Math.max(maxProfit1 + maxProfit2, maxProfit);
    }
    
    return maxProfit;
};


console.log(maxProfit([1, 2, 3, 4, 5]))
console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]))