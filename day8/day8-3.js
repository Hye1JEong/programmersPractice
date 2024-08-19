function solution(emergency) {
  const sorted = [...emergency].sort((a, b) => b - a);
  const level = {};
  //   for (let i = 0; i < emergency.length; i++) {
  //     level[emergency[i]] = sorted.indexOf(emergency[i]);
  //   }
  //return emergency.map((num) => level[num] + 1);
  sorted.forEach((num, index) => (level[num] = index + 1));
  return emergency.map((num) => level[num]);
}

console.log(solution([3, 76, 24]));
