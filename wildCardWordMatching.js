// leetcode #44  hard
// wild card matching
// given an input s and pattern p
// implement wildcard pattern matching with support for '?' and '*'
// '?' matches any single character
//  '*' matches any sequence of character including empty string
// the matching should cover the entire input string not partial

// const s = "aa";
// const p = "a";

// const s = "aa";
// const p = "a*";

const s = "abcdefg";
const p = "ab*fg";

const matchRecursiveFunc = (s, spos, p, ppos) => {
  // base condition
  if (spos == s.length && ppos == p.length) return true;

  if (spos == s.length && ppos < p.length) {
    while (ppos < p.length) {
      if (p[ppos] != "*") return false;

      ppos++;
    }

    return true;
  }

  // solution case
  if (s[spos] == p[ppos] || p[ppos] == "?") {
    return matchRecursiveFunc(s, spos + 1, p, ppos + 1);
  }

  if (p[ppos] == "*") {
    // treat * as empty character
    let caseA = matchRecursiveFunc(s, spos, p, ppos + 1);
    // consider * as one character
    let caseB = matchRecursiveFunc(s, spos + 1, p, ppos);

    return caseA || caseB;
  }

  // character doesnt match in any of above condition
  return false;
};

// recursive approach as it is easy compared to iterative appraoch but can be done iteratively
// Big O TC - O(2^n) as two recursive call for each case
// SC  - O(n+1) = O(n) maximum depth on stack will be size of n+1 for base condition
const wildcardMatch = (s, p) => {
  let spos = 0;
  let ppos = 0;

  let ans = matchRecursiveFunc(s, spos, p, ppos);
  return ans;
};

console.log(wildcardMatch(s, p));
