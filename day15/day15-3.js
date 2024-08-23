function solution(s) {
  const stack = [];
  let duplicated = '';
  [...s].forEach((char) => {
    if (stack.includes(char)) {
      duplicated += stack.splice(stack.indexOf(char), 1);
    } else {
      if (!duplicated.includes(char)) {
        stack.push(char);
      }
    }
  });
  return stack.sort().join('');
}

console.log(solution('abcabcadc'));
console.log(solution('abdc'));
console.log(solution('hello'));
