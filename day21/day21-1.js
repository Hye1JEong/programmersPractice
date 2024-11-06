function solution(my_string) {
  let digits = '';
  let sum = 0;
  for (let i = 0; i < my_string.length; i++) {
    const char = my_string[i];
    if (!isNaN(char)) {
      digits += char;
    } else {
      if (digits) {
        sum += parseInt(digits);
        digits = '';
      }
    }
  }
  //마지막이 숫자로 끝날 때, digits에는 숫자가 남았는데 뒤에 문자가 없어 else문이 돌지 않음
  //따라서 마지막 숫자를 따로 더해줘야 함
  if (digits) sum += parseInt(digits);
  return sum;
}
console.log(solution('aAb1B2cC34oOp'));
console.log(solution('1a2b3c4d123Z'));
