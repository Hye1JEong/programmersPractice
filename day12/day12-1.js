function solution(my_string) {
  const temp = [...my_string];
  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < VOWEL.length; j++) {
      if (temp[i] === VOWEL[j]) temp[i] = '';
    }
  }
  return temp.join('');
}
const VOWEL = ['a', 'e', 'i', 'o', 'u'];

console.log(solution('bus'));
console.log(solution('nice to meet you'));
