// given a string s, reverse the string according to following rule
// - all the characters that are not english letters remains in the same position
// - all the english letter should be reveresed

// const s = "ab-cd";
// o/p - 'dc-ba'

const s = "a-bC-dEf-ghIj";
// o/p - 'j-Ih-gfE-dCba'

// approach - two pointers approach
// two pointer one start and other end will check if character is alphabet then swap
// else start will increment and end will decrement respectively

// Big O  TC - O(n)  SC - O(n)
const reverseOnlyLetters = (str) => {
  let start = 0;
  let end = str.length - 1;
  let strArr = str.split("");

  while (start < end) {
    // there is no inbuilt check for alpha validation hence use regex
    // in js there are inbuit methods such as search, match, test, and exec for string checking
    // str.match method accepts regex and return array of matching values else null
    // str.search method accepts rregex and return position of first matching value else -1
    // regex.test(str) return true or false if str matches regex
    // regex.exec(str) returns array of matching value else null

    if (!/[a-zA-Z]/.test(strArr[start])) {
      start++;
    } else if (!/[a-zA-Z]/.test(strArr[end])) {
      end--;
    } else {
      // swap
      let temp = strArr[start];
      strArr[start] = strArr[end];
      strArr[end] = temp;

      start++;
      end--;
    }
  }

  return strArr.join("");
};

console.log(reverseOnlyLetters(s));

// string method check
// console.log("ABCD".at(-1)); //D
// console.log("ABCD".at(-2)); //C
// console.log("ABCD".at(10)); //undefined
// console.log("ABCD".at()); //A
// console.log(`"ABCD".charAt(-1):` + "ABCD".charAt(-1)); //
// console.log(`"ABCD".charAt(10):` + "ABCD".charAt(10)); //
// console.log(`"ABCD".charAt():` + "ABCD".charAt()); //A
// console.log("ABCD"[-1]); //undefined
// console.log("ABCD"[10]); //undefined
// console.log("ABCD"[0]); //A   //cannot pass empty brackets
