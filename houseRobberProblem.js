// professional robber planning to rob the house along the street
// Each house have certain amout of cash stashed
// only constrain is adjacent house security is connected and call the police if both are broken
// given nums array represnting the money in the house
// return the maximum amount of money you can rob without alerting the police

const nums = [1, 2, 3, 1];
// o/p - 4

// Big O TC - O(2^n) SC - O(n)
// for recursive solution where two recursive calls are made with each solution such as fibonnaci series
// time complexity became 2^n
// SC - O(n)  as depth of the stack would be order of n
const maxMoneyUsingRecursiveFunc = (nums, moneyMap, pos) => {
  // base condition
  if (pos >= nums.length) return 0;

  // solution check
  let sol1 = maxMoneyUsingRecursiveFunc(nums, maxMoney, pos + 1);
  let sol2 = nums[pos] + maxMoneyUsingRecursiveFunc(nums, maxMoney, pos + 2);

  //   console.log(sol1 + "--->" + sol2);
  moneyMap.profit = Math.max(sol1, sol2);
  return Math.max(sol1, sol2);
};

const maxMoney = (nums) => {
  const moneyMap = { profit: 0 };

  maxMoneyUsingRecursiveFunc(nums, moneyMap, 0);

  return moneyMap.profit;
};

console.log(maxMoney(nums));
