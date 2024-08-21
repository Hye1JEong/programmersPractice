function solution(n) {
  if (n == 1) return 1;
  let temp = 1;
  for (let i = 2; i <= n; i++) {
    temp *= i;
    if (temp === n) return i;
    if (temp > n) return i - 1;
  }
}

console.log(solution(1)); //테스트 실패 반례: 기댓값 1-> undefined
console.log(solution(2)); //테스트 실패 반례: 기댓값 2-> undefined
console.log(solution(7));
console.log(solution(3628800));
