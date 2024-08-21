function solution(numbers) {
  const temp = Array.from(numbers);
  temp.sort((a, b) => a - b);
  console.log(temp);
  const maxA = temp.pop();
  const maxB = temp.pop();
  return maxA * maxB;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([0, 31, 24, 10, 1, 9]));
