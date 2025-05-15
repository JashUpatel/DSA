// given array of strings group anagrams into sub arrays in any order
// anagram is word formed  by rearranging the letters of another word
// using all original letter exactly once
// sequence of subarray does not matter

// const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// // o/p - [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

const strs = [""];
// o/p - [[""]]

// approach 1 - via sorting method
// Big O - TC - O(n*klogk) + O(m) = O(n*klogk)  SC - O(nk)
// ignoring the iteration for returing the o/p only calculating core algorithm
const groupAnagramsUsingSorting = (strs) => {
  const groupMap = {};
  const ans = [];
  strs.forEach((str) => {
    let key = str.split("").sort().join("");
    if (groupMap[key]) {
      //   groupMap[key] = groupMap[key].push(str); //not working
      groupMap[key] = [...groupMap[key], str];
      console.log(groupMap[key]);
    } else {
      groupMap[key] = [str];
    }
  });

  for (let el in groupMap) {
    ans.push(groupMap[el]);
  }

  return ans;
};

// approach 2: via hashing method
// generate hash of the strings and compare hash if same group them in array
// hash can be array of 256 length with all 0 then increment the characters position while iterating the str
// this hash would be same for anagrams and use this as a key and group the strings
// in JS character does not correspond to ASCII value like in CPP
// hence need different way to hash the string

console.log(groupAnagramsUsingSorting(strs));
