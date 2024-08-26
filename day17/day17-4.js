function solution(quiz) {
  const result = [];
  quiz.forEach((exp) => {
    const temp = exp.split(' ');

    if (temp[1] === '-') {
      Number(temp[0]) - Number(temp[2]) === Number(temp[4])
        ? result.push('O')
        : result.push('X');
    } else {
      Number(temp[0]) + Number(temp[2]) === Number(temp[4])
        ? result.push('O')
        : result.push('X');
    }
  });

  return result;
}

console.log(solution(['3 - 4 = -3', '5 + 6 = 11']));
console.log(
  solution(['19 - 6 = 13', '5 + 66 = 71', '5 - 15 = 63', '3 - 1 = 2'])
);
//반례: 입력이 -3 - 1일 경우
console.log(
  solution(['19 - 6 = 13', '5 + 66 = 71', '5 - 15 = 63', '-3 - 1 = -4'])
);
