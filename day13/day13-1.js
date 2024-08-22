function solution(s) {
  const arr = s.split(' ');
  for (let i = 0; i < s.length; i++) {
    if (arr[i] === 'Z') {
      arr.splice(i - 1, 2);
      i--;
    }
  }
  return arr.reduce((acc, cur) => acc + Number(cur), 0);
}

console.log(solution('1 2 Z 3'));
console.log(solution('10 20 30 40'));
console.log(solution('10 Z 20 Z'));
console.log(solution('-1 -2 -3 Z'));
