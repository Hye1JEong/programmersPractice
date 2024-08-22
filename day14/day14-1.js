function solution(array, n) {
  array.sort((a, b) => a - b);
  const abs = array.map((t) => Math.abs(t - n));
  //const min = abs.reduce((a, b) => Math.min(a, b));
  const min = Math.min(...abs);
  //return array[abs.findIndex((v) => min === v)];
  return array[abs.indexOf(min)];
}

console.log(solution([3, 10, 28], 20));
console.log(solution([10, 11, 12], 13));
console.log(solution([1, 4, 2, 1], 3)); //반례: 가장 가까운 수가 여러개일 경우 더 작은 수를 return
