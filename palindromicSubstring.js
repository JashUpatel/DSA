// given string s return the number of palindromic substring in it
// a string is palindrome when it reads the same backward and forward
// a substring is a contiguous sequence of character within string
// duplicate values allowed

// let s = "abc";
// o/p - 3

// let s = "aaa";
//  o/p - 6

let s = "noon";
// o/p - 6

const expandAroundIndex = (str, i, j) => {
  let count = 0;
  while (i >= 0 && j < str.length && str[i] == str[j]) {
    count++;
    i--;
    j++;
  }

  return count;
};

// Big O  TC - O(n^2) SC - O(1)
const countPalindromicSubstring = (str) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let oddPalindromicSubstring = expandAroundIndex(str, i, i);

    count = count + oddPalindromicSubstring;

    let evenPalindromicSubstring = expandAroundIndex(str, i, i + 1);

    count = count + evenPalindromicSubstring;
  }

  return count;
};

const checkPalindrome = (str, start, end) => {
  while (start <= end) {
    if (str[start] != str[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
};

// Big O  TC - O(n^3)  SC - O(n)
const countPalindromicSubstringByLoop = (str) => {
  //   let mySet = new Set();
  let count = 0;

  //   use count if allow duplicate entries else use set

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      if (checkPalindrome(str, i, j)) {
        // mySet.add(str.slice(i, j + 1));
        count++;
      }
    }
  }

  return count;
  //   return mySet.size;
};

console.log(countPalindromicSubstring(s));
console.log(countPalindromicSubstringByLoop(s));
