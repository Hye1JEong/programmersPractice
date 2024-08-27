function solution(array) {
  let count = 0;
  const arr = array.join('').split('');
  arr.forEach((num) => {
    if (num === '7') count++;
  });
  return count;
}

console.log(solution([7, 77, 17]));
console.log(solution([10, 29]));
