function factorial(n) {
  return n !== 1 ? n * factorial(n - 1) : 1;
}
function solution(balls, share) {
  const arr = [];
  let num = balls;
  let numer = 1;
  const denom = factorial(share);

  for (let i = 0; i < share; i++) {
    arr.push(num);
    num--;
  }
  arr.forEach((num) => (numer *= num));
  //numer = arr.reduce((acc, cur)=> acc*cur, 1);

  return Math.floor(numer / denom);
}

console.log(solution(30, 15));
