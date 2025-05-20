// check prime number :
// number is prime if it has no other factor apart from number itself and one
// - naive approach - check every number if multiple if given number
// - square root method - check only till the square root of number if there is multiple
// - seive of eratosthenes - optimised theorem to find prime numbers
// - segmented seive - for checking prime number between given range

// check prime number
// approach 1:  naive approach check all the value less than number if it is a factor
// Big O - TC O(n)

const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

// approach 2: square root method
// n = a*b  if both a, b > sqrt of n then a*b > n
// therefore atleast one of any possible factor of n would be less than sq root of n
// Big O - TC O(sqrt n)

const isPrimeOptimised = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }

  return true;
};

// count primes #204
// given integer n return number of prime number that are strictly less than n
// constraint : 0 <= n <= 5 * 10^6
// approach 1: Brute force approach
// Big O - TC O(n^2)
// result into time limit exceed for large value

const countPrime = (n) => {
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (isPrimeOptimised(i)) count++;
  }

  return count;
};

// approach 2 : seive of eratosthenes
// create array of size n having position 0 to n-1 with all value marking prime i.e 1
// mark 0 and 1 position 0 marking non prime
// start from 2 till end, mark all its multiple positions in the array as 0
// repeat till n-1 finally count and return all the values marked/left as prime i.e 1

// Big O - TC O(n * log logn)
// n*(n/2+n/3+n/4...) - taylor series => log(logn)

const countPrimeOptimised = (n) => {
  if (n == 0) return 0;

  const primes = new Array(n).fill(1);
  primes[0] = primes[1] = 0;

  let count = 0;

  //   for (let i = 2; i < n; i++) {
  for (let i = 2; i * i < n; i++) {
    // another way for condition i<sqrt(n)
    // for more optimization as value more than sqrt(n) would be > n when marking i*i
    // hence that would be unnecessary iteration after value of i is more than sqrt(n)
    // involve sqrt(n) as well

    // console.log(i);

    if (primes[i]) {
      // increment count and return this count will work for normal seive i.e 2 to n
      // for 2 to sqrt(n) count values of array separately
      //   count++;

      //   let j = 2 * i;
      let j = i * i;
      //   for more optimization as first unmarked position would be i*i other would be marked by 2 to i-1

      while (j < n) {
        primes[j] = 0;
        j += i;
      }
    }
  }

  // in case of optimised seive looping count explicitely else count in above for loop will work
  for (let k in primes) {
    if (primes[k]) count++;
  }

  return count; // incase if normal seive approach
};

// returns seive [array with prime position marked with 1 rest 0] from position 0 to n
// use as per requirement if need to not include n pass n-1

const createSeive = (n) => {
  // since we want from 0 to n position we are passing n+1 length
  // first we mark all the position as prime as per theorem
  const seive = new Array(n + 1).fill(1);

  // mark 0 and 1 position as per theorem
  seive[0] = seive[1] = 0;

  // start from position 2 till n
  // and mark their multiples to nonprime i.e 0
  // for (let i = 2; i <= n; i++) {
  // better optimised version as we are taking first multiple as i*i
  // so value for i*i greater than n will be useless iteration hence limiting to sqrt(n)
  for (let i = 2; i * i <= n; i++) {
    if (seive[i]) {
      // start from it's first multiple
      // let j = i * 2;

      // optimized version using starting i*i
      // as all position before that will be already marked
      let j = i * i;

      // iterate till n position
      while (j <= n) {
        seive[j] = 0;
        j += i;
      }
    }
  }
  return seive;
};

// segmented seive approach
// count prime number between given range left and right
// use regular seive approach to create seive

const segSeive = (l, r) => {
  const fullSeive = createSeive(r);

  // now count the positions marked as prime
  let count = 0;

  for (let key in fullSeive) {
    // key returns key/position value in string type
    if (parseInt(key) >= l && parseInt(key) <= r && fullSeive[key]) count++;

    // if (key) {
    //   console.log(key + typeof key);
    //   ++count;
    // }
  }

  return count;
};

// approach 2: optimised segmented seive
// for counting primes from full seive from L to R
// but can't use this approach when input is >10^6
// as that would require an array of size 10^6 for marking positions
// that is if L is 10^6 and R is 10^9 would require to create seive of 10^9
// system would not permit that even though you require primes between position value 10^6 and 10^9
// that could be stored in 10^3 size array
// but system architechture supports memory max size for array in any function to be 10^6 and 10^7 for bool array
// and 10^7 when declared globally and 10^8 for bool type array as per C language arch
// OS limit memory size while executing code depends upon system arch it can be 8mb 10 or so on
// generally assuming it is 8mb
// so declaring 10^6 size array of int(take 8byte in 64bit sys)/double would take 8,000,000 memory i.e 8mb
// so would result in stack overflow

const segSeiveOptimised = (l, r) => {
  // const fullSeive = createSeive(r);

  // first find base primes for marking the non primes from L to R
  // so base primes till sqrt(r)
  // as value above that would be more than R when marking the poisition i.e i*i
  const seive = createSeive(parseInt(Math.sqrt(r)));
  // console.log(seive);

  const basePrimes = [];

  for (let key in seive) {
    if (parseInt(seive[key])) basePrimes.push(key);
  }

  // create array of size L-R+1 to store and mark segmented positions
  const segSeive = new Array(r - l + 1).fill(1);

  // now handling the case when L is 0 or 1 and mark it as non prime i.e 0
  // if (l == 0 || l == 1) segSeive[l] = 0;
  // above would not work for l =0 it will only mark 0 position as nonprime

  if (l == 0 || l == 1) {
    let i = 0;
    while (i < 2 - l) segSeive[i++] = 0;
  }

  // if confusing use simple if else logic to mark 0,1 position for l=0 and 1 pos for l=1

  // console.log(basePrimes);

  for (let prime in basePrimes) {
    // calculate first multiple of prime number by below formula
    let firstMul =
      parseInt(l / parseInt(basePrimes[prime])) * parseInt(basePrimes[prime]);

    // console.log(firstMul);

    // if first multiple is less than l than add it with prime
    if (firstMul < l) firstMul += parseInt(basePrimes[prime]);

    let j = Math.max(
      firstMul,
      parseInt(basePrimes[prime]) * parseInt(basePrimes[prime])
    );

    // console.log(j);

    while (j <= r) {
      // for resembling the position in the array
      segSeive[j - l] = 0;
      j += parseInt(basePrimes[prime]);
    }
  }

  // console.log(segSeive);

  // now count the positions marked as prime
  let count = 0;
  for (let k in segSeive) {
    if (segSeive[k]) count++;
  }

  // console.log(count);
  // return count;

  // for returning prime numbers return array
  const primeNums = [];
  for (let k in segSeive) {
    if (segSeive[k]) primeNums.push(parseInt(k) + l);
  }

  return primeNums;
};

// similar GFG problem to find product of prime between L and R

const productOfPrime = (l, r) => {
  const primeNums = segSeiveOptimised(l, r);

  let ans = 1;
  for (let p in primeNums) {
    ans *= primeNums[p];
  }

  return ans;
};

// GCD of two positive numbers
// HCF = GCD = highest common factor
// Euclidean algorithm
// theorem for GCD is GCD (a, b) = GCD (a-b, b) if a>b else GCD (b-a, a)
// can use % in pace of - will give same result
// but since % operation is heavy compared to - use - or upto usecase
// repeat above step till one of parameter become 0
// The other one is answer
// Big O - TC O(max(a,b))
// Suppose a and b are very close in value (for example, a = n and b = n-1). In this case, you will need to perform roughly n-1 subtractions to reduce the numbers to zero.
// Therefore, the worst-case time complexity is: O(max(a,b))

const gcd = (a, b) => {
  if (a == 0) return b;
  if (b == 0) return a;

  while (a > 0 && b > 0) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }

  return a == 0 ? b : a;
};

// The standard Euclidean algorithm (using a % b) has a time complexity of O(log⁡ min⁡(a,b))
// Big O - TC O(log min(a,b)).
const gcdOptimised = (a, b) => {
  if (a == 0) return b;
  if (b == 0) return a;

  while (a > 0 && b > 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }

  return a == 0 ? b : a;
};

// lcm(a,b)*gcd(a,b) = a*b

const lcm = (a, b) => {
  let GCD = gcd(a, b);
  return (a * b) / GCD;
};

// exponentiation
// slow/naive method to calculate exponent

// Big O - TC O(b)

const slowExponent = (a, b) => {
  let ans = 1;
  for (let i = 0; i < b; i++) {
    ans *= a;
  }

  return ans;
};

// fast exponentiation method
// pow(a,b) : (a^(b/2))^2  if b is even else a*(a^(b/2))^2
// Big O - TC O(log b)

const fastExponent = (a, b) => {
  let ans = 1;
  while (b > 0) {
    // check if b is odd/even
    if (b & 1) {
      ans = ans * a;
    }
    a = a * a;
    b >>= 1; // divide by 2
  }

  return ans;
};

console.log(isPrime(2));
console.log(isPrimeOptimised(11));
console.log(countPrime(10));
console.log(countPrimeOptimised(25));
console.log(segSeive(0, 25));
console.log(segSeiveOptimised(1, 10));
console.log(productOfPrime(1, 10));
console.log(gcd(3, 6));
console.log(gcd(1, 1));
console.log(gcdOptimised(3, 6));
console.log(lcm(3, 6));
console.log(slowExponent(2, 10));
console.log(fastExponent(2, 10));
// console.log(0 ? 0 : 1); //1
// console.log(parseInt("2")); //2 (int)
