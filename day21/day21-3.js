function solution(sides) {
  //1. sides 중 큰 수가 max일 경우
  const max = Math.max(sides[0], sides[1]);
  const min = Math.min(sides[0], sides[1]);
  const answer = [];
  for (let i = max - min + 1; i <= max; i++) {
    answer.push(i);
  }
  //2. 나머지 한 변이 max가 될 경우
  for (let i = max + 1; i < min + max; i++) {
    answer.push(i);
  }
  return answer.length;
}
console.log(solution([1, 2]));
console.log(solution([3, 6]));
console.log(solution([11, 7]));
