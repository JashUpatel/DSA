// given string s consisting of lowercase english letter
// duplicate removal consist of choosing two adjacent and equal letter and remove them
// we repeatedly make duplicate removal on s untill no longer can.
//  return the final string after all duplicate removal has been made.

let s = "abbaca";

// Big O - TC O(n) SC O(n)
const removeDuplicates = (str) => {
  let ptr = 1;
  let ans = [];
  ans.push(str[0]);

  while (ptr < str.length) {
    if (ans.length < 1 || (ans.length > 0 && str[ptr] != ans[ans.length - 1])) {
      ans.push(str[ptr]);
    } else {
      ans.pop();
    }
    ptr++;
  }

  return ans.join("");
};

console.log(removeDuplicates(s));
