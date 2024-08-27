function solution(polynomial) {
  const polyArr = polynomial.split('+').map((exp) => exp.trim());

  const constant = polyArr
    .filter((exp) => !exp.includes('x'))
    .reduce((acc, cur) => acc + Number(cur), 0);

  let varConst = 0;
  polyArr
    .filter((exp) => exp.includes('x'))
    .forEach((exp) => {
      if (exp.length === 1) {
        varConst++;
      } else {
        const temp = exp.slice(0, exp.length - 1);
        varConst += Number(temp);
      }
    });

  if (varConst === 0) {
    return `${constant}`;
  } else if (varConst === 1) {
    return constant > 0 ? `x + ${constant}` : `x`;
  } else if (constant === 0) {
    return `${varConst}x`;
  } else {
    return `${varConst}x + ${constant}`;
  }
}

console.log(solution('3x + 7 + x'));
console.log(solution('x + x + x'));
//반례: x항 계수가 1이면 1x가 아니라 x로 출력하도록
console.log(solution('x + 5'));
console.log(solution('x + x'));
