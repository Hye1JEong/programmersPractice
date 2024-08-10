function solution(array) {
  const copied = Array.from(array);
  for (let i = 0; i < copied.length; i++) {
    for (let j = i + 1; j < copied.length; j++) {
      if (copied[i] > array[j]) {
        const temp = copied[i];
        copied[i] = copied[j];
        copied[j] = temp;
      }
    }
  }
  const middleIndex = Math.trunc(copied.length / 2);

  return copied[middleIndex];
}

const array = [1, 3, 4, 5, 2];
console.log(solution(array));
