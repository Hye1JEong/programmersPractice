function solution(age) {
  console.log(age.toString().split(''));
  const alphabet = 'abcdefghij';
  const stringAge = String(age);
  let answer = '';
  //   for (let i = 0; i < stringAge.length; i++) {
  //     for (let j = 0; j < alphabet.length; j++) {
  //       if (stringAge[i] === String(j)) {
  //         answer += alphabet[j];
  //       }
  //     }
  //   }
  for (let i = 0; i < stringAge.length; i++) {
    answer += alphabet[stringAge[i]];
  }
  return answer;
}

console.log(solution(23));
console.log(solution(51));
console.log(solution(100));
