function solution(my_str, n) {
  const result = [];
  const str = [...my_str];

  for (let i = 0; i < my_str.length; i += n) {
    result.push(str.splice(0, n).join(''));
  }
  return result;
}

console.log(solution('abc1Addfggg4556b', 6));
console.log(solution('abcdef123', 3));
