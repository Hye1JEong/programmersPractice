function solution(cipher, code) {
  return [...cipher].filter((_, idx) => ++idx % code === 0).join('');
}

console.log(solution('dfjardstddetckdaccccdegk', 4));
console.log(solution('pfqallllabwaoclk', 2));
