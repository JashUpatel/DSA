// reverse only vowels in string
// given string s, reverse only all the vowels in the string and return it.
// vowels can be in uppercase and lowecase.

const s = "hello";
// o/p - 'holle'

// const s = "leetcode";
// o/p - 'leotcede'

// two pointers approach for reverseing
// Big O  TC - O(n)  SC - O(n)
const reverseOnlyVowels = (str) => {
  let ans = str.split("");
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (!/[a,e,i,o,u]/.test(ans[start].toLowerCase())) start++;
    else if (!/[a,e,i,o,u]/.test(ans[end].toLowerCase())) end--;
    else {
      //   let temp = ans[start];
      //   ans[start] = ans[end];
      //   ans[end] = temp;

      [ans[start], ans[end]] = [ans[end], ans[start]];
      start++;
      end--;
    }
  }

  return ans.join("");
};

console.log(reverseOnlyVowels(s));
