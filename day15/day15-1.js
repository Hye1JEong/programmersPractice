function solution(numbers) {
  let result = '';
  let temp = '';
  const numKeys = Object.keys(NUM);
  for (let i = 0; i < numbers.length; i++) {
    temp += numbers[i];
    if (numKeys.includes(temp)) {
      result += NUM[temp];
      temp = '';
    }
  }
  return Number(result);
}
const NUM = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  zero: 0,
};
console.log(solution('onetwothreefourfivesixseveneightnine'));
console.log(solution('onefourzerosixseven'));
