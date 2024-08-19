function solution(my_string, letter) {
  const my_array = [...my_string];
  return my_array.filter((char) => char !== letter).join('');
}

console.log(solution('abcdef', 'f'));
console.log(solution('BCBdbe', 'B'));
