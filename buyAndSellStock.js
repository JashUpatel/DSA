// leetcode #121
// given array of prices where price[i] is the price of the ith day
// you want to maximize your profit by choosing a single day to buy one stock
// and choosing different day in future to sell the stock
// return maximum profit you can achieve from this transaction
// if cannot acheive any profit return 0

const prices = [7, 1, 5, 3, 6, 4];
// o/p 5

const maxProfitFinderRecursiveFunc = (prices, order, pos) => {
  // base case
  if (pos == prices.length) return;

  // solution check
  //   console.log(order.minPrice + "-->" + prices[pos]);
  if (order.minPrice > prices[pos]) order.minPrice = prices[pos];
  //   console.log(order.profit + "-->" + (prices[pos] - order.minPrice));

  if (order.profit < prices[pos] - order.minPrice)
    order.profit = prices[pos] - order.minPrice;

  //   console.log(order);
  maxProfitFinderRecursiveFunc(prices, order, pos + 1);
};

const maxProfit = (prices) => {
  const order = { profit: 0, minPrice: Number.MAX_SAFE_INTEGER, maxPrice: 0 };

  maxProfitFinderRecursiveFunc(prices, order, 0);

  return order.profit;
};

console.log(maxProfit(prices));
