function solution(num_list, n) {
  const list = Array.from(num_list);
  const result = [];
  for (let i = 0; i < num_list.length / n; i++) {
    let temp = [];
    for (let j = 0; j < n; j++) temp.push(list.shift());
    result.push(temp);
  }
  return result;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2));
