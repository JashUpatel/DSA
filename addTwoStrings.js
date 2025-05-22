// add two strings and return a sum in string

const num1 = "11";
const num2 = "123";

// more optimised recursive function as it does not create unnecessary copies of data
// i.e ans as it is created once in main func and pass as reference it is best practice
// suppose we stored ans in array and input is of size 10^6
// then recursive function would store and create array of 10^6 in worst case in nested func calls
const addStringRecursiveFunc = (num1, p1, num2, p2, carry, ans) => {
  // base condition
  if (p1 < 0 && p2 < 0) {
    if (carry != 0) ans.push(carry);
    // converting carry in string before pushing to ans array
    // but not necessary as in JS string + number result in string only

    return;
  }

  // solution
  //   num1 and num2 are strs we need numbers to add subtract '0' gives number
  let n1 = p1 >= 0 ? num1[p1] - "0" : 0;
  let n2 = p2 >= 0 ? num2[p2] - "0" : 0;
  //   console.log(num1 + "-->" + n1);
  //   console.log(num2 + "--->" + n2);

  let sum = n1 + n2 + carry;
  let digit = sum % 10;

  //   console.log(sum);
  //   console.log(digit);
  ans.push(digit);

  carry = parseInt(sum / 10);
  //   console.log(carry);

  addStringRecursiveFunc(num1, p1 - 1, num2, p2 - 1, carry, ans);
};

// Big O TC - O(n+1) = O(n) SC - O(n+1) = O(n)
const addTwoStringsUsingRecursion = (num1, num2) => {
  let ans = [];
  // for storing the sum digit by digit and pass by reference

  // starting index for addition - start from end
  let p1 = num1.length - 1;
  let p2 = num2.length - 1;

  addStringRecursiveFunc(num1, p1, num2, p2, 0, ans);

  //join returns string so if no explicit conversion is done during adding in array is ok
  return ans.reverse().join("");
};

const addStringRecursiveFuncNonOptimised = (num1, p1, num2, p2, carry) => {
  // base condition
  if (p1 < 0 && p2 < 0) {
    if (carry != 0) return carry.toString();
    // converting carry in string before pushing to ans array
    // but not necessary as in JS string + number result in string only

    return "";
  }

  // solution
  //   num1 and num2 are strs we need numbers to add subtract '0' gives number
  let n1 = p1 >= 0 ? num1[p1] - "0" : 0;
  let n2 = p2 >= 0 ? num2[p2] - "0" : 0;
  //   console.log(num1 + "-->" + n1);
  //   console.log(num2 + "--->" + n2);

  let sum = n1 + n2 + carry;
  let digit = sum % 10;

  let ans = "";

  //   console.log(sum);
  //   console.log(digit);
  ans += digit.toString();

  carry = parseInt(sum / 10);
  //   console.log(carry);

  ans += addStringRecursiveFuncNonOptimised(num1, p1 - 1, num2, p2 - 1, carry);
  return ans;
};

// using recursion like this will also work but results in increased TC and SC
// as it creates unnecessary copies and data like ans string
// suppose we stored ans in array and input is of size 10^6
// then recursive function would store and create array of 10^6 in worst case in nested func calls
// to avoid this create ans array in main function and pass by reference
// pass by reference improves TC and SC in recursion
const addTwoStringsUsingRecursionNonOptimised = (num1, num2) => {
  // starting index for addition - start from end
  let p1 = num1.length - 1;
  let p2 = num2.length - 1;

  const ans = addStringRecursiveFuncNonOptimised(num1, p1, num2, p2, 0);

  //join returns string so if no explicit conversion is done during adding in array is ok
  return ans.split("").reverse().join("");
};

console.log(addTwoStringsUsingRecursion(num1, num2));
console.log(addTwoStringsUsingRecursionNonOptimised(num1, num2));
// string to number conversion using subtraction
console.log("1" - "2");
