// division of numbers using binary search

const divisionUsingBinarySearch = (dividend, divisor) => {
  let start = 0;
  let end = Math.abs(dividend);
  let mid = parseInt((start + end) / 2);
  let ans = -1;

  while (start <= end) {
    if (mid * Math.abs(divisor) == Math.abs(dividend)) {
      return mid;
    }

    if (mid * Math.abs(divisor) < Math.abs(dividend)) {
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    mid = parseInt((start + end) / 2);
  }

  //   handling negative numbers
  if (!((dividend < 0 && divisor < 0) || (dividend >= 0 && divisor >= 0))) {
    ans = ans * -1;
  }

  return ans;
};

console.log(divisionUsingBinarySearch(-29, 7));
