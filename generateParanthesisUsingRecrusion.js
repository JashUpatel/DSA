// generate paranthesis
// given n pair of paranthesis write function to generate
// all combination of well formed paranthesis

const n = 3;
// o/p - [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
// const n = 2;
// o/p - [ '(())', '()()' ]
// const n=1;
//  o/p - ["()"]

const solve = (ans, open, close, output) => {
  // base condition
  if (open == 0 && close == 0) {
    ans.push(output);
    return;
  }

  // include open bracket
  if (open > 0) {
    solve(ans, open - 1, close, output + "(");
  }

  // include close bracket
  if (close > open) {
    solve(ans, open, close - 1, output + ")");
  }

  return ans;
};

const generateParanthesis = (n) => {
  const ans = [];
  let open = n;
  let close = n;
  const output = "";
  return solve(ans, open, close, output);
};

console.log(generateParanthesis(n));
