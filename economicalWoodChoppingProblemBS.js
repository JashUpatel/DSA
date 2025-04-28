// given array of tree having height in metres,mirco needs to chop down M metre of wood
// mirco need to set height H of the machine to chop all the trees higher than H and reaminsH meter intact
// mirco is ecological minded so doenot cut off tree then needed so set the height of blade as high as possible
// find maximum height of the saw blade that allow him to cut off atleast M metre of wood

const trees = [20, 15, 10, 17];
const M = 7;

const isPossibleSolution = (trees, M, mid) => {
  let wood = 0;

  for (let i = 0; i < trees.length; i++) {
    if (trees[i] >= mid) {
      wood = wood + (trees[i] - mid);
    }
  }
  return wood >= M;
};

const findMaxSawBladeHeight = (trees, M) => {
  let start = 0;
  let end = Math.max(...trees);
  let ans = -1;

  while (start <= end) {
    let mid = start + parseInt((end - start) / 2);
    if (isPossibleSolution(trees, M, mid)) {
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return ans;
};

console.log(findMaxSawBladeHeight(trees, M));
