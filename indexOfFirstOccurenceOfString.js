// given 2 strings needle and haystack,
// return the index of first occurence of needle in haystack or -1 if needle is not part of haystack

const haystack = "sadbutsad";
const needle = "sad";
// o/p - 0

// const haystack = "leetcode";
// const needle = "leeto";
// o/p - -1

// Big O  TC - O(n*m)

const indexOfFirstOccurence = (str, subStr) => {
  for (let i = 0; i < str.length - subStr.length; i++) {
    for (let j = 0; j < subStr.length; j++) {
      // compare all positions of substring with correspoding string
      if (str[i + j] != subStr[j]) {
        break;
      }

      if (j == subStr.length - 1) {
        return i;
      }
    }
  }

  return -1;
};

console.log(indexOfFirstOccurence(haystack, needle));
