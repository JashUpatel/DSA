// leetcode med #526 Beautiful arrangement
// suppose you have n integer labeled 1 through n
// A permutation of those n integers perm(1-indexed) is considered beautiful arrangement
// if for every 1<=i<=n either of following is truw:
// - perm(i) is divisible by i
// - i is divisible by perm(i)
// given an integer n return the number of beautiful arrangement that you can construct.

const n = 3;
//  1 2 3
//  2 1 3
//  3 2 1
// o/p - 3

// const n = 2;
//  1 2
//  2 1
// 2

const countArrangementsRecursiveFunc = (arr, n, ans, curNum) => {
  // base case
  if (curNum == n + 1) {
    // for (let i = 1; i <= n; i++) {
    console.log(...arr);
    // }

    // incrementing the count
    // ans[0] = ans[0] + 1;

    ans++;

    return ans;
  }

  for (let i = 1; i <= n; i++) {
    // console.log(arr);

    if (arr[i] == 0 && (curNum % i == 0 || i % curNum == 0)) {
      arr[i] = curNum;

      // if ans is stored in var not array ie not passed as reference
      ans = countArrangementsRecursiveFunc(arr, n, ans, curNum + 1);

      // backtrackings
      arr[i] = 0;
    }
  }

  // console.log(ans);
  return ans;
};

const countArrangements = (n) => {
  const arr = new Array(n + 1).fill(0);
  let ans = 0;
  // or can use the count as this as well if not want to pass it as reference throuh array

  // let ans = [0];
  // passing array tokeep count as we cannot pass by reference

  ans = countArrangementsRecursiveFunc(arr, n, ans, 1);

  return ans;
  // return ans[0];
};

console.log(countArrangements(n));
