// isomorphic string
// given two string s and t check if they are ispmorphic
// two strings are isomorphic if characters in s can be replaced to get t
// all occurence of a character must be replaced with another character
// while preserving the order of character
// no two character may map to same character but a character may map to itself
// t.length = s.length

// const s = "egg";
// const t = "add";
// o/p - true

// const s = "foo";
// const t = "bar";
// o/p - false

const s = "paper";
const t = "title";
// o/p - true

// Big O  TC - O(n)  SC - O(n)
const checkIsomorphicStrings = (str1, str2) => {
  const charMap = {};
  for (let i = 0; i < str1.length; i++) {
    if (!charMap[str1[i]]) {
      charMap[str1[i]] = str2[i];
    } else {
      if (charMap[str1[i]] != str2[i]) return false;
    }
  }

  return true;
};

console.log(checkIsomorphicStrings(s, t));
