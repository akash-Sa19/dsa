class Solution {
  /**
   * @param {string} A
   * @return {number}
   */
  seats(A) {
    const MOD = 10000003;

    // All the indices of 'x'
    let crosses = [];
    for (let i = 0; i < A.length; i++) {
      if (A[i] === "x") {
        crosses.push(i);
      }
    }

    crosses = crosses.map((cross, i) => cross - i);

    const n = crosses.length;
    if (n === 0) return 0;

    let ans = Infinity;
    for (let segment_start = 0; segment_start < A.length; segment_start++) {
      let total = 0;
      for (const cross of crosses) {
        total += Math.abs(cross - segment_start);
        total %= MOD;
      }
      ans = Math.min(ans, total % MOD);
    }

    return ans;
  }
}

// Example usage:
const solution = new Solution();
const A = "....x..xx...x..";
console.log(solution.seats(A)); // Output: the minimum moves needed
