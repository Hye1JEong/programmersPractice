function solution(array) {
  //배열의 요소를 key값으로 하여 key에 빈도수를 저장
  const frequency = {};
  array.forEach((element) => {
    if (frequency[element]) {
      frequency[element]++;
    } else {
      frequency[element] = 1;
    }
  });

  //최대 빈도수를 찾고 중복되는지 확인
  let max = 0;
  let element = -1;
  let isMultiple = false;
  for (let num in frequency) {
    if (frequency[num] > max) {
      max = frequency[num];
      element = Number(num);
      isMultiple = false;
    } else if (frequency[num] === max) {
      isMultiple = true;
    }
  }

  return isMultiple ? -1 : element;
}

console.log(solution([1, 2, 3, 3, 3, 4]));
