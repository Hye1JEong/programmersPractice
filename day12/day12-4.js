function solution(n) {
  let num = 2;
  const result = [];
  while (n > 1) {
    //n이 num으로 나누어질 때만 n 업데이트, result에 push
    //나누어 떨어지지 않으면 num 증가
    if (n % num === 0) {
      if (!result.includes(num)) result.push(num);
      n /= num;
    } else {
      num++;
    }
  }
  return result.sort((a, b) => a - b);
}

console.log(solution(12));
console.log(solution(17));
console.log(solution(420));
