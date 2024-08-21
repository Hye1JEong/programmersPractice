function solution(my_string) {
  const temp = [...my_string];
  const result = [];
  //temp[i] !== NaN으로 바로 비교 불가
  for (let i = 0; i < temp.length; i++) {
    if (!isNaN(temp[i])) {
      result.push(Number(temp[i]));
    }
  }
  return result.sort();
}

console.log(solution('hi12392'));
console.log(solution('p2o4i8gj2'));
