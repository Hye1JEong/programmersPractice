function solution(my_string) {
  //   let result = '';
  //   const len = my_string.length;
  //   for (let i = len; i > 0; i--) {
  //     result = result + my_string.slice(i - 1, i);
  //   }
  //   return result;
  console.log(my_string);
  console.log([...my_string]);
  console.log(Array.from(my_string));
  console.log(my_string.split(''));
  const answer = [...my_string].reverse().join('');

  return answer;
}
console.log(solution('bread'));
