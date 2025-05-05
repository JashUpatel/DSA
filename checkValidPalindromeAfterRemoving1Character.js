// given string s return true
// if s can be palindrome after deleting at most one character from it.

// let s = "aba";
// let s = "abcd";
let s = "abca";

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

const checkValidPalindrome = (str) => {
  let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    if (str[start] != str[end]) {
      return (
        checkPalindrome(str, start + 1, end) ||
        checkPalindrome(str, start, end - 1)
      );
    } else {
      start++;
      end--;
    }
  }

  return true;
};

console.log(checkValidPalindrome(s));
