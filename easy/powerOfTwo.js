/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function(n) {
  if (n <= 0) return false;
  return n > 0 ? !(n & (n - 1)) : false;
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(218));

// Given an integer, write a function to determine if it is a power of two.

// Example 1:

// Input: 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: 218
// Output: false