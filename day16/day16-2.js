function solution(array) {
  const maxValue = array.reduce((a, b) => Math.max(a, b));
  return [maxValue, array.indexOf(maxValue)];
  //
}
console.log(solution([1, 8, 3]));
console.log(solution([9, 10, 11, 8]));
