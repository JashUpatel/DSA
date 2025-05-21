// longest palindromic substring

// const s = "babad";
// o/p - "bab"
// "aba" also correct

const s = "cbbd";
// o/p - "bb"

const isPalindrome = (str, start, end) => {
  while (start < end) {
    if (str[start] != str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

// approach : generate all the possible substring and check if it palindrome
// store and return the longest palindromic substring
// Big O - TC - O(n^3) in worst case but can be reduced to O(n^2) using DP

const longestPalindromicSubstring = (str) => {
  let ans = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      if (isPalindrome(str, i, j)) {
        let res = str.substring(i, j + 1);
        ans = res.length > ans.length ? res : ans;
      }
    }
  }
  return ans;
};

// using iteration we can print only consecutive subsequences in the string
// if we were to allow blank start inner loop from 0
// as slice returns '' if start >= end else from i
// and substring return '' if start=end else swap the position of start and end
const subsequenceInString = (str) => {
  // const subSeq = new Set();
  const subSeq = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      // subSeq.add(str.substring(i, j + 1));
      subSeq.push(str.substring(i, j + 1));
      // subSeq.add(str.slice(i, j + 1));
    }
  }
  return subSeq;
};

const subseqRecursiveFunc = (str, subStr, output, pos) => {
  // base condition
  if (pos >= str.length) {
    output.push(subStr);
    // console.log(pos);
    // console.log(output);
    // return output;  // it's pretty much useless and it doesnot return to main func
    return;
  }

  // exclude the character
  subseqRecursiveFunc(str, subStr, output, pos + 1);

  // include the character
  subStr += str[pos];
  subseqRecursiveFunc(str, subStr, output, pos + 1);
};

// prints all the subsets/substrings of given string
// approach is used commonly for the include/exclude type of problems
const subsequenceInStringUsingRecursion = (str) => {
  // const subSeq = new Set();
  let pos = 0;
  let subStr = "";
  const output = [];

  // here the recursive function does not return to main function
  // even if you return in if case as recursive call isn't returning anything
  // since array are pass by reference the operation in recursive function reflect in main function
  const subSeq = subseqRecursiveFunc(str, subStr, output, pos);
  // console.log(output);

  // return subSeq;  // prints undefined as function does not return anything to main function
  return output;
};

console.log(longestPalindromicSubstring(s));
console.log(subsequenceInString("abc"));
console.log(subsequenceInStringUsingRecursion("abc"));
console.log(subsequenceInString(s));
console.log(subsequenceInStringUsingRecursion(s));

// string methods
// substring returns portion of string just as slice but it does not handle negative args
// substring method convert negative args to 0 while slice checks from backward in case of negative args
// also if start > end in args then slice retuns "" but substrings swaps the args and return substring
// end value is omitted by both when returning the string

// console.log(s[2]);
// console.log(s[(2, 4)]);
// console.log(s.substring(2, 4));
// console.log(s.slice(2, 4));
// console.log(s[(0, 3)]);
// console.log(s[(2, 5)]);
