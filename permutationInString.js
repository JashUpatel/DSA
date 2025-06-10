// permutation  in string using back tracking

const str = "abc";

const permutationRecursiveFunc = (str, i) => {
  // base case
  if (i >= str.length) {
    console.log(str.join(""));
    return;
  }

  // logic case
  for (let j = i; j < str.length; j++) {
    // swapping
    [str[i], str[j]] = [str[j], str[i]];
    // recursive call
    permutationRecursiveFunc(str, i + 1);

    // back tracking
    [str[i], str[j]] = [str[j], str[i]];
  }
};

const permutation = (str) => {
  let i = 0;
  permutationRecursiveFunc(str.split(""), i);
};

console.log(permutation(str));
