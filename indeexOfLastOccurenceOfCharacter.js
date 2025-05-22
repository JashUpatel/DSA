// return last occurence of the character in the given string
// there could be multiple solutions for this problem
// approach 1: using builtin string method to return the lasrt occurence
// approach 2: using iterative approach from start to end and storing the matching position
// returning at the end of the iteration having the last position of the givren character in string
// approach 3: better iterative approach would be to look from end to start
// and the first position matching the given character would be the last position
// approach 4: reverse the string and look from start to end
// the first position matching the charcter would be the last occurence
// while returning position would be (size - index)
// but the above approach would require more operations then others
// and the Big O would be TC - O(nlogn) + O(n) = O(nlogn)
// also we can use recursion for the approach 2 and 3.

const str = "abcddedg";
const char = "d";

// using the builtin js string method
// indexOf() return the first index of the specified substring in the given string
// lastIndexOf() return the last index
// search is also used to return first index of matching substring in the string else -1
// it uses regular expression for flexible pattern matching unline indexOf and lastIndexOf
// also in indexOf and lastIndexOf we can specify the optional starting position to check as argument
// but in search we cannot specify any start position to look for in string
// there is match function as well that matches a string against Regular expression
// but match returns array with the matches and returns null if no match
// there is exec method as well to test the match in the string and
// if finds a match retuns result array else null
// str.test(RE)
// includes method return true or false if find the substring in the givem string
// we can give optional start position as well to look for in includes
const lastOccurenceInString = (str, char) => str.lastIndexOf(char);

const lastIndexStartToEndRecursiveFunc = (str, char, pos, ans) => {
  // base condition
  if (pos >= str.length) return;

  // solution check
  if (str[pos] == char) ans.pos = pos;

  lastIndexStartToEndRecursiveFunc(str, char, pos + 1, ans);
};

// check from start position of string to end using recusrion
// can also be done without recusrion and simple iteration
// Big O TC - O(n+1) = O(n) and SC - O(n+1) = O(n) //1 extra function call for base condition
const lastOccurenceInStringUsingRecursionFromStartToEnd = (str, char) => {
  // using object to pass by reference i.e to store value while multiple nested calls
  const ans = { pos: -1 };
  lastIndexStartToEndRecursiveFunc(str, char, 0, ans);
  return ans.pos;
};

const lastIndexEndToStartRecursiveFunc = (str, char, pos, ans) => {
  // base condition
  if (pos < 0) return;

  // solution check
  if (str[pos] == char) {
    ans.pos = pos;
    return; //no need to iterate further
  }

  lastIndexEndToStartRecursiveFunc(str, char, pos - 1, ans);
};

// check from end position of string to start using recusrion
// can also be done without recusrion and simple iteration
// Big O TC - O(n+1) = O(n) and SC - O(n+1) = O(n) //1 extra function call for base condition
const lastOccurenceInStringUsingRecursionFromEnd = (str, char) => {
  // using object to pass by reference i.e to store value while multiple nested calls
  const ans = { pos: -1 };
  lastIndexEndToStartRecursiveFunc(str, char, str.length - 1, ans);
  return ans.pos;
};

console.log(lastOccurenceInString(str, char));
console.log(lastOccurenceInStringUsingRecursionFromStartToEnd(str, char));
console.log(lastOccurenceInStringUsingRecursionFromEnd(str, char));
