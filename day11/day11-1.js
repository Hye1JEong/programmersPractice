function solution(box, n) {
  const result = [];
  box.forEach((num) => {
    result.push(Math.floor(num / n));
  });
  return result.reduce((acc, cur) => acc * cur);
}

console.log(solution([1, 1, 1], 1));
console.log(solution([10, 8, 6], 3));
