// fibonachi numbers
const fib = (n) => {
  const res = Array(n + 1).fill(0);
  res[1] = 1;
  for (let i = 1; i <= n; i++) {
    res[i + 1] += res[i];
    res[i + 2] += res[i];
  }
  return res[n];
};

console.log(fib(50));
