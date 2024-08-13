function solution(money) {
  let cup = 0;
  while (money >= 5500) {
    money -= 5500;
    cup += 1;
  }
  return [cup, money];
}

console.log(solution(5500));
console.log(solution(15000));
