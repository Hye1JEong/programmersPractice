function solution(n) {
  // if (n <= 7) {
  //   return 1;
  // }
  // if (n % 7 !== 0) {
  //   return Math.trunc(n / 7) + 1;
  // } else {
  //   return n / 7;
  // }

  return Math.ceil(n / 7);
}

console.log(solution(17));
