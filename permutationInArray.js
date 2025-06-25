// leetcode med #47 permutation 2

// given collection of nums that might contain duplicate
// return all possible unique permutation in any order

// const nums = [1, 2, 3];
// o/p-  [ [ 3, 1, 2 ], [ 2, 3, 1 ], [ 2, 1, 3 ],
//       [ 3, 2, 1 ], [ 1, 3, 2 ], [ 1, 2, 3 ] ]

const nums = [1, 1, 2];
// o/p - [ [ 2, 1, 1 ], [ 1, 2, 1 ], [ 1, 1, 2 ] ]

const permuationRecursiveFunc = (nums, ans, start) => {
  // base case
  if (start == nums.length) {
    // convert into set of strings to remove duplicates
    // if dont want to use set then use visited object to track the duplicate element
    // const strArr = ans.map((el) => JSON.stringify(el));
    // const temp = new Set(strArr);

    // console.log("temp", temp.has(JSON.stringify(nums)));
    // console.log("temp", temp);

    // if (!temp.has(JSON.stringify(nums))) ans.push([...nums]);

    // temp.add(JSON.stringify(nums));

    ans.push([...nums]);

    // add conditional push into array using set so bellow not required
    // ans = new Array([...temp]).map((el) => JSON.parse(el));
    // console.log("ans", ans);
    return;
  }

  //   to remove duplicates
  const visited = {};

  for (let i = start; i < nums.length; i++) {
    // console.log("----");
    // console.log(nums[i], visited);
    // console.log(`${visited[nums[i]]}`);

    let idx = nums[i];

    // console.log(idx, visited[`${idx}`]);

    if (visited[idx]) continue;

    visited[nums[i]] = true;

    // console.log(nums[i], visited);

    [nums[i], nums[start]] = [nums[start], nums[i]];

    // console.log(start, nums);

    permuationRecursiveFunc(nums, ans, start + 1);

    // back tracking
    [nums[i], nums[start]] = [nums[start], nums[i]];
  }
};

const permuation = (nums) => {
  const ans = [];

  permuationRecursiveFunc(nums, ans, 0);

  return ans;
};

console.log(permuation(nums));

// const obj = { 1: true, 2: false };
// const one = 1;
// const two = 2;
// console.log(obj);
// console.log(obj[one]);
// console.log(obj[two]);
// console.log(obj["2"]);
// console.log(obj[2]);
