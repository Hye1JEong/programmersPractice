function solution(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    if (count >= 3) {
      result.push(1);
    }
  }
  return result.length;
}

console.log(solution(10));
console.log(solution(15));
