function solution(my_string) {
  const result = [];
  [...my_string].forEach((element) => {
    if (!isNaN(element)) result.push(Number(element));
  });
  return result.reduce((acc, cur) => acc + cur);
}

console.log(solution('aAb1B2cC34oOp'));

//reduce쓸 때 바로 Number로 형변환 해줄 수 있다.
//   'aAb1B2cC34oOp'
//     .replace(/[^0-9]/g, '')
//     .split('')
//     .reduce((acc, curr) => acc + Number(curr), 0);
