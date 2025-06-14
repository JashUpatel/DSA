// #17 Letter combination of the phone number - Medium
// Given a string containing digits from 2-9
// return all the possible letter combination that number could represent
// return answer in any order

const inp = "23";
// o/p -['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']

// const inp = "";
// o/p = []

// const inp = "2";
// o/p - [a,b,c];

const solve = (ans, index, output, digits, mapping) => {
  // base case
  if (index >= digits.length) {
    ans.push(output.join(""));
    return;
  }

  // solve 1 case rest recursion
  const digi = digits[index] - "0";
  //   console.log(digi);

  let value = mapping[digits[index]];
  //   console.log(value);

  for (let i = 0; i < value.length; i++) {
    // push the value
    output.push(value[i]);
    // console.log(output);

    // recursion for rest value
    solve(ans, index + 1, output, digits, mapping);

    // pop the value for Backtracking when using array
    // or can use string instead of array for storing results i.e output
    // so no need to pop back just pass output + value as params in function
    output.pop();
  }

  return ans;
};

const letterCombination = (digits) => {
  const ans = [];
  let index = 0;
  const output = [];
  const mapping = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  if (digits == "") return ans;

  return solve(ans, index, output, digits, mapping);
};

console.log(letterCombination(inp));
