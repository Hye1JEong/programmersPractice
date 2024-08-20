function getOrdered(numbers) {
  if (numbers.length % 2 === 0) {
    return numbers.filter((num) => num % 2 !== 0);
  } else {
    const odd = numbers.filter((num) => num % 2 !== 0);
    const even = numbers.filter((num) => num % 2 === 0);
    return odd.concat(even);
  }
}
function solution(numbers, k) {
  const ordered = getOrdered(numbers);

  //   if (k > ordered.length) {
  //     return ordered[(k % ordered.length) - 1];
  //   } else {
  //     return ordered[k - 1];
  //   }
  const index = (k - 1) % ordered.length;
  return ordered[index];
}

// console.log(solution([1, 2, 3, 4], 2));
// console.log(solution([1, 2, 3], 3));
// console.log(solution([1, 2, 3, 4, 5, 6, 7], 10));
// console.log(solution([1, 2, 3, 4, 5, 6], 5));
console.log(solution([1, 2, 3, 4, 5], 10));
