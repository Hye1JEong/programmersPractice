function solution(my_string, num1, num2) {
  const arr = [...my_string];
  // const temp = arr[num1];
  // arr[num1] = arr[num2];
  // arr[num2] = temp;

  // return arr.join('');

  [arr[num1], arr[num2]] = [arr[num2], arr[num1]];

  return arr.join('');
}

console.log(solution('hello', 1, 2));
console.log(solution('i love you', 3, 6));
