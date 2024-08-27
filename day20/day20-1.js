function solution(dots) {
  const X = [];
  const Y = [];
  dots.forEach((coord) => {
    X.push(coord[0]);
    Y.push(coord[1]);
  });
  const width = Math.max(...X) - Math.min(...X);
  const height = Math.max(...Y) - Math.min(...Y);

  return width * height;
}

console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ])
);
console.log(
  solution([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ])
);
