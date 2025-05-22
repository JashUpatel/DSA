// reverse only vowels in string
// given string s, reverse only all the vowels in the string and return it.
// vowels can be in uppercase and lowecase.

const s = "hello";
// o/p - 'holle'

// const s = "leetcode";
// o/p - 'leotcede'

// two pointers approach for reverseing
// Big O  TC - O(n)  SC - O(n)
const reverseOnlyVowels = (str) => {
  let ans = str.split("");
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (!/[a,e,i,o,u]/.test(ans[start].toLowerCase())) start++;
    else if (!/[a,e,i,o,u]/.test(ans[end].toLowerCase())) end--;
    else {
      //   let temp = ans[start];
      //   ans[start] = ans[end];
      //   ans[end] = temp;

      [ans[start], ans[end]] = [ans[end], ans[start]];
      start++;
      end--;
    }
  }

  return ans.join("");
};

const reverseVowelsRecursiveFunc = (strArr, start, end) => {
  // base condition
  if (start >= end) return;

  // solution check
  if (!/[a,e,i,o,u]/.test(strArr[start].toLowerCase()))
    reverseVowelsRecursiveFunc(strArr, start + 1, end);
  else if (!/[a,e,i,o,u]/.test(strArr[end].toLowerCase()))
    reverseVowelsRecursiveFunc(strArr, start, end - 1);
  else {
    //   let temp = strArr[start];
    //   strArr[start] = strArr[end];
    //   strArr[end] = temp;

    [strArr[start], strArr[end]] = [strArr[end], strArr[start]];
    start++;
    end--;
    reverseVowelsRecursiveFunc(strArr, start, end);
  }
};

// reverse the vowels in the string using recursion
// Big O  TC - O(n/2 + 1) = O(n) SC - O(n/2 + 1) = O(n)
// 1 call for base condition check
const reverseOnlyVowelsUsingRecursion = (str) => {
  let start = 0;
  let end = str.length - 1;
  let strArr = str.split("");
  // to make inplace operation and return the string without declaring new string

  reverseVowelsRecursiveFunc(strArr, start, end);

  return strArr.join("");
};

console.log(reverseOnlyVowels(s));
console.log(reverseOnlyVowelsUsingRecursion(s));
