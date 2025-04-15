// add two numbers represented by two arrays
// find sum of both numbers in number

const a = [9, 5, 4, 9];
const b = [2, 1, 4];

// const a = [0, 9, 0, 0, 3, 5];
// const b = [2, 2, 7];

const addNumbersOfArrays = (a, b) => {
  let carry = 0;
  const ans = [];
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 && j >= 0) {
    let x = a[i] + b[j] + carry;
    let digit = x % 10;
    ans.push(digit);
    carry = parseInt(x / 10);
    i--;
    j--;
  }

  while (i >= 0) {
    let x = a[i] + carry;
    let digit = x % 10;
    ans.push(digit);
    carry = parseInt(x / 10);
    i--;
  }

  while (j >= 0) {
    let x = b[j] + carry;
    let digit = x % 10;
    ans.push(digit);
    carry = parseInt(x / 10);
    j--;
  }

  if (carry) {
    ans.push(carry);
  }

  return parseInt(ans.reverse().join(""));
};

// factorial of large number using arrays and return string to diplay exact digits
const factorialOfLargeNumberUsingArray = (n) => {
  const ans = [];
  ans.push(1);
  let carry = 0;

  for (var i = 2; i <= n; i++) {
    for (var j = 0; j < ans.length; j++) {
      let x = ans[j] * i + carry;
      ans[j] = x % 10;
      carry = parseInt(x / 10);
    }
    while (carry) {
      ans.push(carry % 10);
      carry = parseInt(carry / 10);
    }
  }

  return ans.reverse().join("");
};

console.log(addNumbersOfArrays(a, b));
console.log(factorialOfLargeNumberUsingArray(50));
