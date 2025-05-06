// longest common prefix
// find the longest common prefix string amongst an array of strings
// if there is no common prefix, return an empty string

// const strs = ["flower", "flow", "flight"];
// o/p - fl

const strs = ["dog", "racecar", "car"];
// o/p - ""

// Big O  TC - O(n^2)  SC - O(n)
const longestCommonPrefix = (strs) => {
  let ans = "";
  let count = 0;

  while (true) {
    let currCh = "";
    strs.forEach((str) => {
      if (count >= str.length) {
        currCh = -1;

        // break;  //cannot use break in foreach
        return ans;
      }
      if (!currCh) {
        currCh = str.charAt(count);
      } else if (currCh != str.charAt(count)) {
        currCh = -1;
        // if use space instead of -1 then above condition will be true for next iteration
        // as we are unable to break in for each
      }
    });

    if (currCh == -1) break;
    ans = ans + currCh;
    count++;
  }

  return ans;
};

const longestCommonPrefixByLoop = (strs) => {
  let ans = "";
  let count = 0;

  while (true) {
    let currCh = "";
    for (let i in strs) {
      if (count >= strs[i].length) {
        currCh = "";
        break;
      }
      if (!currCh) {
        currCh = strs[i].charAt(count);
      } else if (currCh != strs[i].charAt(count)) {
        currCh = "";
        break;
      }
    }

    if (!currCh) break;
    ans = ans + currCh;
    count++;
  }

  return ans;
};
console.log(longestCommonPrefix(strs));
console.log(longestCommonPrefixByLoop(strs));
