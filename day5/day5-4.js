function solution(num_list) {
  const copied = Array.from(num_list);
  const newArray = [];
  for (let i = 0; i < num_list.length; i++) {
    newArray.push(copied.pop());
  }
  return newArray;
}

console.log(solution([1, 2, 3, 4, 5]));
