// leetcode med #39 cobination sum
// list of all unique combiantion where sum is target
// the same number can be choosed unlimited number of times
// also two combination are unique if frequncy of the one of the number is different

// leetcode med #40 cobination sum 2
// find unique combinations where sum is target
// each number in candidates may only be used once
// solution may not contain duplicate solution

// can be done by using nested loops

// const candidates = [2, 3, 6, 7];
// const target = 7;

// o/p - [[2,2,3], [7]]

const candidates = [2, 5, 2, 1, 2];
const target = 5;

// [ [ 2, 2, 1 ], [ 2, 2, 1 ], [ 2, 1, 1, 1 ],
// [ 2, 1, 2 ], [ 5 ], [ 2, 2, 1 ], [ 2, 1, 1, 1 ],
// [ 2, 1, 2 ], [ 1, 1, 1, 1, 1 ], [ 1, 1, 1, 2 ],
// [ 1, 2, 2 ]
// ]

// as observed there are duplicates in final output in this case
// if mentioned in problem to find unique combination of array

const combinationSumRecursiveFunc = (
  candidates,
  target,
  output,
  ans,
  index
) => {
  // base case
  if (target == 0) {
    // console.log(output);
    // ans.push(output)
    // by using above line it will push reference of output into ans
    // not the actual value of array hence will result into incorrect behaviour
    // i.e when output.pop is performed it is reflected in value of ans elements
    // result in final o/p [[],[]] as it was pass by reference it seems
    // so to counter that behaviour use destructuting using spread operator ans push new array
    // this will separate value of output array and element pushed into ans array
    // hence any change in output would not be reflected in ans

    ans.push([...output]);

    // when used set convert output array into string store in ans
    // as set will not recognise duplicate array so convert into string
    // finally return array from set with map over json.parse to convert back to original type

    // console.log(ans);
    // console.log(output);

    // ans.add(JSON.stringify(output));
    return;
  }

  if (target < 0) {
    // console.log(ans);
    return;
  }

  for (let i = index; i < candidates.length; i++) {
    // for unique combination without using set this will be the approach
    // this will compare the element with previous element and if they are same
    // will skip the call and will not use that element
    // as array is sorted it will give unique combinations
    // remove this condition in case of normal combination sum

    if (i > index && candidates[i] == candidates[i - 1]) {
      continue;
    }

    output.push(candidates[i]);
    // console.log(output);
    let t = target - candidates[i];
    // console.log(t);
    // console.log("in", ans);

    // for normal combination sum where same element can be reused
    // combinationSumRecursiveFunc(candidates, t, output, ans, i);

    // for unique combination sum where each element can be used only once
    // but still there would be duplicate combinations in solution
    //  as there could be repeated elements in given array
    // to handle that use set
    combinationSumRecursiveFunc(candidates, t, output, ans, i + 1);
    // combinationSumRecursiveFunc(candidates, t, output, ans, i);

    output.pop();
    // console.log("out", ans);
  }

  // console.log("ans", ans);
};

// Big O - TC O(n^n) SC O(n)
const combinationSum = (candidates, target) => {
  const ans = [];

  // use set with stringify only in case of unqiue combination sum no duplicate combo
  // and when not using the if check the previous element while recursion call
  // const ans = new Set();

  const output = [];

  // sort for unique combination sum
  // sort will return [ [ 1, 2, 2 ], [ 5 ] ] instead of [ [ 2, 2, 1 ], [ 2, 1, 2 ], [ 5 ] ]
  combinationSumRecursiveFunc(
    candidates.sort((a, b) => a - b),
    // candidates,
    target,
    output,
    ans,
    0
  );

  return ans;
  // even this will not remove duplicate arrays
  // return [...new Set(ans)];

  // in case of set of strings
  // return Array.from(ans).map((e) => JSON.parse(e));
};

//
//
//
//
//
//
// combination sum calculating to targert using loops
// gives unique combinations

const combiantionSumUsingLoops = (candidates, target) => {
  console.log(candidates);
  const ans = [];

  for (let i = 0; i < candidates.length; i++) {
    const output = [];
    let targetRem = target;

    let idx = i;
    // let idx = 0;

    while (targetRem >= 0 && idx <= candidates.length) {
      // console.log("tar", targetRem);
      // console.log(candidates[i], candidates[idx], output);

      if (targetRem == 0) {
        if (output.length) ans.push([...output]);

        // console.log(ans);
        break;
      } else if (targetRem < 0) {
        // idx++;

        // for unique solution
        continue;
      } else {
        // console.log("rem", targetRem - candidates[idx]);

        output.push(candidates[idx]);
        targetRem = targetRem - candidates[idx];
      }

      // console.log("tar2", targetRem);
      // console.log(candidates[idx], output);
      // console.log("ans", ans);

      // for unique solution
      idx++;
    }
  }

  return ans;
};

// used while loop but still unable to achieve combination sum 1 solution
// using same element multiple times
const combiantionSumUsingWhileLoops = (candidates, target) => {
  console.log(candidates);
  const ans = [];
  let i = 0;
  // let output = [];
  // let targetRem = target;

  while (i < candidates.length) {
    let output = [];
    let targetRem = target;

    // console.log(candidates[i], output);
    // console.log("tar", targetRem);

    output.push(candidates[i]);
    targetRem = targetRem - candidates[i];
    // console.log("tar3", targetRem);

    i++;

    if (targetRem == 0) {
      if (output.length) ans.push([...output]);
      targetRem = target;
      output = [];

      // console.log(ans);
      // break;
    } else if (targetRem < 0) {
      // idx++;
      // output.pop();
      targetRem = target;
      output = [];
      // for unique solution
      continue;
    } else {
      // console.log("rem", targetRem - candidates[idx]);

      // output.push(candidates[idx]);
      // targetRem = targetRem - candidates[idx];
      // }

      // inner loop
      let idx = i;
      // let idx = 0;

      while (targetRem >= 0 && idx <= candidates.length) {
        // console.log("tar", targetRem);
        // console.log(candidates[i], candidates[idx], output);

        if (targetRem == 0) {
          if (output.length) ans.push([...output]);
          // reset the value
          targetRem = target;

          // console.log("ans", ans);
          break;
        } else if (targetRem < 0) {
          // idx++;

          // reset the value
          output = [];
          targetRem = target;
          continue;
        } else {
          // console.log("rem", targetRem - candidates[idx]);

          output.push(candidates[idx]);
          targetRem = targetRem - candidates[idx];
        }

        // console.log("tar2", targetRem);
        // console.log(candidates[idx], output);
        // console.log("ans", ans);

        // for unique solution
        idx++;
      }
    }
  }

  return ans;
};

console.log(combinationSum(candidates, target));
console.log(combiantionSumUsingLoops(candidates, target));
console.log(combiantionSumUsingWhileLoops(candidates, target));

// if (0) {
//   console.log("0");
// }
