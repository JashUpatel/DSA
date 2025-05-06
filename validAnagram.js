// given two string s and t return true if t is an anagramof s and false otherwise
// anagram is a word formed by rearranging the letters of different word,
// typically using all the original letters exactly once.

const s = "anagram";
const t = "nagaram";

// const s = "rat";
// const t = "cat";

// approach 1: brute force approach sort both the strings and compare both if equal then anagram
// Big O  TC - O(nlogn)  SC - O(1)
const checkValidAnagramBySort = (str1, str2) => {
  return str1.split("").sort().join("") == str2.split("").sort().join("");
};

// approach 2: counting method
// number of respective character in string1 should be same in string2
// Big O   TC - O(n+m)  SC - O(n)
const checkValidAnagram = (str1, str2) => {
  const charCount = {};

  str1.split("").forEach((char) => {
    if (charCount[char]) {
      charCount[char] = charCount[char] + 1;
    } else {
      charCount[char] = 1;
    }
  });

  str2.split("").forEach((char) => {
    if (charCount[char]) {
      charCount[char] = charCount[char] - 1;
    } else {
      //   charCount[char] = -1;
      return false;
    }
  });

  for (let i = 0; i < str2.length; i++) {
    if (charCount[str2[i]]) {
      return false;
    }
  }

  return true;
};

console.log(checkValidAnagram(s, t));
console.log(checkValidAnagramBySort(s, t));

// check string comparison

if (-1) console.log(-1); //-1
if (0) console.log(0);
if (NaN) console.log(NaN);
if (undefined) console.log(undefined);
if ("") console.log("space");
if ("   ") console.log("tab"); //tab
if ("\t") console.log("tab"); //tab
if ("\n") console.log("newline"); //newline
if (`\n`) console.log("newline"); //newline
