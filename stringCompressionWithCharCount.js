// given array of characters compress it using below rules
// begin with empty string s and for each consecutive repeating character
// if group length is 1 then append character to s
// else append character followed by group length (char count)
// the compressed string should not be returned separately but instead
// be stored in input character array chars

const chars = ["a", "a", "b", "b", "c", "c", "c"];
// o/p - ['a', '2', 'b', '2', 'c', '3']

// const chars = ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"];
// o/p ['a', '1', '3']

// Big O - TC O(n*k)
const compress = (chars) => {
  let prev = chars[0];
  let count = 1;
  let indx = 0;

  for (let i = 1; i < chars.length; i++) {
    if (chars[i] == prev) {
      count++;
    } else {
      chars[indx++] = prev;
      if (count > 1) {
        let temp = (count + "").split("").reverse();
        while (temp.length > 0) {
          //   chars[indx++] = (count % 10) + "";
          chars[indx++] = temp.pop();
          //   count = parseInt(count / 10);
        }
        // temp.reverse();
        while (temp.length > 0) {
          chars[indx++] = temp.pop();
        }
      }

      prev = chars[i];
      count = 1;
    }
  }

  chars[indx++] = prev;
  if (count > 1) {
    let temp = (count + "").split("").reverse();
    while (temp.length > 0) {
      //   chars[indx++] = (count % 10) + "";
      chars[indx++] = temp.pop();

      //   count = parseInt(count / 10);
    }
    // temp.reverse();

    while (temp.length > 0) {
      chars[indx++] = temp.pop();
    }

    return chars.slice(0, indx);
  }
};

console.log(compress(chars));
