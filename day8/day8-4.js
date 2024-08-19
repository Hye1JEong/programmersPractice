function solution(n) {
  const a = [];
  const b = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      a.push(i);
      b.push(n / i);
    }
  }
  console.log(a, b);
  return a.length;
}
console.log(solution(20));
console.log(solution(100));
