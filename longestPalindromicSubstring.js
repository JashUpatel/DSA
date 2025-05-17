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

console.log(longestPalindromicSubstring(s));

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
