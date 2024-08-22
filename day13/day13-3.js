function solution(my_string) {
  const arr = [...my_string];
  const result = [];
  arr.forEach((element) => {
    if (!result.includes(element)) result.push(element);
  });
  return result.join('');
}

console.log(solution('people'));
console.log(solution('We are the world'));
