function solution(my_string) {
  const temp = my_string.split(' ');
  //식이 올바르다면
  let result = Number(temp[0]);
  for (let i = 1; i < temp.length; i += 2) {
    const operator = temp[i];
    const number = Number(temp[i + 1]);

    if (operator === '+') result += number;
    if (operator === '-') result -= number;
  }
  return result;
}
console.log(solution('3 + 4'));
