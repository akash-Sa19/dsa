var climbStairs = function (n) {
  let a = 0,
    b = 1,
    c = 0;

  for (let i = 0; i < n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
};

console.log(climbStairs(5));
