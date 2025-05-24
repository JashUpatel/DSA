// leetcode #1155 number of dice rolls with taget sum
// you have n dice with k faces and a target
// return number of possible way to roll dice(out of k^n ways)
// so the sum of the face up number equal target
// since answer would be too large return modulo 10^9+7

// const n = 1;
// const k = 6;
// const target = 3;
// o/p - 1
// throw 1 dice with 6 face there is only one way to get 3

const n = 2;
const k = 6;
const target = 7;
// o/p - 6
// throw 2 dice with 6 faces
// there are 6 ways to get 7 i.e: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1

// number of dice roll with k faces to reach target via recursive solution
// Big O  TC - O(k^n) as at ith roll k possible recursive soln
// SC - O(n+1) = O(n) as max depth of the stack with recursive function would be n+1
const numRollsToTarget = (n, k, target) => {
  // base check
  if (target < 0) return 0;
  if (n == 0 && target == 0) return 1;
  if (n == 0 && target != 0) return 0;
  if (n != 0 && target == 0) return 0;

  let ans = 0;
  // k faces in dice range from 1 to k
  for (let i = 1; i <= k; i++) {
    // at ith roll target remain would be target - i(also value of ith face)
    // and remains n-1 rolls to reach target
    ans = ans + numRollsToTarget(n - 1, k, target - i);
  }
  return ans;
};

console.log(numRollsToTarget(n, k, target));
