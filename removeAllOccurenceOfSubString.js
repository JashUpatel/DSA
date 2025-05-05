// given 2 strings s and part
// perform following operation on s untill all occurence of substring part are removed
// find leftmost occurence of substring part and remove it from s.
// return s after revoming all the occurence of part

let s = "daabcbaabcbc";
let part = "abc";
// o/p - dab

// Big O TC - O(n) SC - O(1)
const removeOccurenceOfSubstring = (str, subStr) => {
  let ans = str.slice(0, subStr.length - 1);
  let ptr = subStr.length;

  while (ptr < str.length) {
    if (ans.length < subStr.length) {
      ans = ans + str[ptr];
    } else {
      let ansStr = ans.slice(ans.length - subStr.length, ans.length - 1);

      if (ansStr == subStr) {
        ans.slice(ans.length - subStr.length, ans.length - 1);
      }
    }

    // console.log(ans);
    ptr++;
  }

  return ans;
};

// Big O TC - O(n) SC - O(1)
const removeOccurence = (str, subStr) => {
  let pos = str.search(subStr);
  while (pos != -1) {
    str = str.slice(0, pos) + str.slice(pos + subStr.length);
    pos = str.search(subStr);
  }

  return str;
};

console.log(removeOccurenceOfSubstring(s, part));
console.log(removeOccurence(s, part));
