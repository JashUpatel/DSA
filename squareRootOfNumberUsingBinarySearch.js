// find square root of given number using binary search method
// Big O - TC - O(logn) SC - O(1)

const squareRootOfNumberUsingBinarySearch = (num) => {
  let start = 0;
  let end = num;
  let mid = parseInt((start + end) / 2);
  let ans = -1;

  while (start <= end) {
    // console.log(mid);
    if (mid * mid == num) {
      return mid;
    }

    if (mid * mid < num) {
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    mid = parseInt((start + end) / 2);
  }

  return ans;
};

const squareRootOfNumberWithPrecision = (num, precision) => {
  let ans = squareRootOfNumberUsingBinarySearch(num);
  let step = 0.1;
  var finalAns = ans;

  for (var i = 1; i <= precision; i++) {
    for (var j = finalAns; j * j <= num; j = j + step) {
      finalAns = j;
      // console.log(finalAns);
    }
    step = step / 10;
    // console.log(step);
  }

  // using toPrecision to adjust the precision value for float in js
  // as parseFloat(3.11+0.01) gives value around 3.11999997
  return parseFloat(finalAns.toPrecision(precision + 2));
};

// console.log(squareRootOfNumberUsingBinarySearch(25));
console.log(squareRootOfNumberWithPrecision(10, 5));
