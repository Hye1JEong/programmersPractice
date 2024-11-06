function solution(board) {
  const n = board.length; //row
  const m = board[0].length; //column

  //danger zone: 상 하 좌 우 대각선 8방향인 곳
  const dangerZone = [
    [-1, 1],
    [0, 1],
    [1, 1],
    [-1, 0],
    [1, 0],
    [-1, -1],
    [0, -1],
    [1, -1],
  ];

  const answer = Array.from({ length: n }, () => Array(m).fill(0));

  //board를 순회하며 지뢰지점 찾기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 1) {
        //지뢰를 찾았다면
        answer[i][j] = 1;
        for (const [dx, dy] of dangerZone) {
          const di = i + dx;
          const dj = j + dy;
          if (di >= 0 && di < n && dj >= 0 && dj < m) {
            //board 경계를 넘어가지 않으면 인접 지역도 위험 지역으로
            answer[di][dj] = 1;
          }
        }
      }
    }
  }

  let safeCount = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (answer[i][j] === 0) safeCount++;
    }
  }
  return safeCount;
}

console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
);
// console.log(
//   solution([
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 1, 1, 0],
//     [0, 0, 0, 0, 0],
//   ])
// );
// console.log(
//   solution([
//     [1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1],
//   ])
// );
