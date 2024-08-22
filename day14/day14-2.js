function solution(order) {
  const arr = String(order).split('');
  let count = 0;
  arr.forEach((target) => {
    if (target === '3' || target === '6' || target === '9') count++;
  });
  return count;
}

console.log(solution(3));
console.log(solution(29423));
