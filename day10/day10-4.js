function solution(numbers, direction) {
  const list = Array.from(numbers);
  const result = [];
  if (direction === 'right') {
    result.unshift(list.pop());
    while (list.length > 0) {
      result.push(list.shift());
    }
  } else {
    const temp = list.shift();
    list.forEach((num) => result.push(num));
    result.push(temp);
  }
  return result;
}

console.log(solution([1, 2, 3], 'right'));
console.log(solution([4, 455, 6, 4, -1, 45, 6], 'left'));
